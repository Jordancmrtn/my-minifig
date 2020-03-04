const express = require('express');
const database = require('../config.js')
const seriesRouter = express.Router();

seriesRouter.post('/', function(req, res) {

  const { title, img_url, year, serie } = req.body;
    //Si un dans champs est vide alors on envoi une erreur.
  if(!title || !img_url || !year || !serie) {
    res.status(400).send('Il manque un champ à remplir');
  } else {
    //Si tout les champs sont remplis je vérifie que la minifig est pas en BD en vérifiant son nom
    database.query(`SELECT img_url FROM serie1 WHERE img_url = "${img_url}"`, function(err, rows) {
      if(err) {
        res.sendStatus(400);
        throw err;
      } else {
        if(rows.length > 0) {
          res.status(400).send("La mifig est déjà enregistrée");
        } else {
          database.query(`INSERT INTO series (img_url, title, year, serie) 
                          VALUES('${img_url}', "${title}", ${year}, '${serie}');`, function(err, rows) {
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


seriesRouter.get('/', function(req, res) {
  database.query("SELECT * FROM series", (error, result) => {
    if(error) { res.sendStatus(400) };
    res.send(result)
  })
})

seriesRouter.get('/:id', function(req, res) {
  database.query(`SELECT * FROM series WHERE serie = "${req.params.id}"`, (error, result) => {
    if(error) { res.sendStatus(400) };
    res.send(result)
  })
})

module.exports = seriesRouter;
