const express = require('express');
const database = require('../config.js');
const collectionRouter = express.Router();

////// AJOUTE A LA COLLECTION //////
collectionRouter.post('/', function(req, res) {

  const {user, serieid} = req.query;

  //Faire une query qui récupère tout en funciton de l'user et qui vérifie si serieid est déjà dans sa collection
  database.query(`SELECT id FROM series, collection WHERE series.id = collection.id_serie AND ${serieid} = id`, function(err, rows) {
    if(err) {
      res.sendStatus(400);
      throw err;
    } else {
      if(rows.length > 0) {
        res.status(400).send("La minifigure est déjà en base de donnée");
      } else {
        database.query(`INSERT INTO collection (id_user, id_serie) 
                VALUES("${user}", "${serieid}")`, function(err, rows) {
                  if(err){
                    res.sendStatus(400);
                    throw err;
                  } else {
                    res.sendStatus(200);
                  }
        });
        }
      } 
  })
});

////// SUPRESSION //////
collectionRouter.delete('/', function(req, res) {

  const {user, serieid} = req.query;

  //Faire une query qui récupère tout en funciton de l'user et qui vérifie si serieid est déjà dans sa collection
  database.query(`DELETE FROM collection 
                  WHERE collection.id_serie 
                  IN (SELECT id FROM series WHERE series.id = ${serieid}) 
                  AND collection.id_user = "${user}";`, function(err, rows) {
    if(err) {
      res.sendStatus(400);
      throw err;
    } else {
      res.status(200).send(rows)
      } 
  })
});

////// RECUPERE LA COLLECTION //////
collectionRouter.get('/', function(req, res) {

  const {user} = req.query;

  database.query(`SELECT img_url, title, year, serie, firstname, lastname, series.id 
                  FROM collection, series, users WHERE collection.id_user = "${user}"
                  AND collection.id_serie = series.id ORDER BY year DESC`, function(err, rows) {
    if(err){
      res.sendStatus(400);
      throw err;
    } else {
      res.status(200).send(rows);
    }
  })
})


module.exports = collectionRouter;


// SELECT series.id, series.img_url, series.title, series.year, series.serie, users.firstname, users.lastname FROM series JOIN collection ON series.id = collection.id_serie JOIN users ON users.id = collection.id_user WHERE users.id = 1 ORDER BY series.year DESC;