const express = require('express');
const database = require('../config.js');
const keySsh = require('../keySsh.js');
const sha256 = require('sha256');
const jwt = require('jsonwebtoken');
const loginRouter = express.Router();

//Road for connection
loginRouter.post('/', function(req, res) {
  const {email, password} = req.body;

  //if in the form there is no email OR password send error
  if(!email || !password) {
    res.status(400).send('Il manque des champs')
  } else {
    //Recovers the data in the database with the email and the corresponding password
    database.query(`SELECT email, lastname, firstname, date FROM users
    WHERE email = '${email}' AND password = '${sha256(password)}'`, function(err, result) {
      if(err){
        res.sendStatus(400);
        throw err;
      } else {
        if(result.lenght <= 0) {
          res.status(403).send('Mauvais email / mot de passe')
        } else {
          res.status(200).send({
            token: generateToken(result[0].email),
            user : result[0]
          });
        }
      }
    })
  }
});

//Generate a token with the email
const generateToken = (email) => {
  return jwt.sign({
    exp : Date.now() + (14 * 24 * 60 * 60),
    data : {
      email : email
    }
  }, keySsh)
};

module.exports = loginRouter;