const express = require('express');
const database = require('../config.js');
const userRouter = express.Router();
const sha256 = require('sha256');
const jwt = require('jsonwebtoken');
const keySsh = require('../keySsh.js');




const isAuthenticated = (req, res, next) => {
  //If there is an auth,(a toker)
  if(typeof req.headers.authorization !== 'undefined'){
    //split the auth with the " " and we take the 2nd part (the toker and not the word "Bearer")
    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token, keySsh, (err, user) => {
      //if there is a token but it's not good
      if(err){
        res.status(403).send("N'est pas autorisé");
      }
      req.userEmail = user.data.email;
      return next();
    })
  } else {
    res.status(403).send("N'est pas autorisé");
  }
};


userRouter.get('/', isAuthenticated, function(req, res) {
  database.query(`SELECT firstname, lastname, id FROM users WHERE email = "${req.userEmail}"`, function(err, rows) {
    if (err) {
      res.status(500).send('Not Found');
    }
    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).send('Not Found');
    }
  })
});

//POST on "/user" road TO CREATE A USER
userRouter.post('/', function(req, res) {

  const { firstname, lastname, email, password } = req.body;

  if(!firstname || !lastname || !email || !password) {
    res.status(400).send('Il manque un champ à remplir');
  } else {
    //Si tout les champs sont remplis je vérifie que la minifig est pas en BD en vérifiant son nom
    database.query(`SELECT email FROM users WHERE email = "${email}"`, function(err, rows) {
      if(err) {
        res.sendStatus(400);
        throw err;
      } else {
        if(rows.length > 0) {
          res.status(400).send("Cet email est déjà utilisé !");
        } else {
          database.query(`INSERT INTO users (firstname, lastname, email, password, date) 
          VALUES("${firstname}", "${lastname}", '${email}', '${sha256(password)}', NOW())`, function(err, rows) {
            if(err){
              res.sendStatus(400);
              throw err;
            } else {
              res.sendStatus(200);
            }
          })
        }
      }
    })
    }
});

module.exports = userRouter;