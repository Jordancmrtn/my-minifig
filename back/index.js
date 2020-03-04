const express = require('express');
const bodyParser = require('body-parser');
const seriesRouter = require('./route/series.js');
const userRouter = require('./route/users.js');
const loginRouter = require('./route/login.js');
const collectionRouter = require('./route/collection.js')
const cors = require('cors');

const api = express();
      api.use(cors());
      api.use(bodyParser.json());
      api.use(bodyParser.urlencoded({extended: false}));

const port = 8000;

//Here all the roads.
api.use('/series', seriesRouter);
api.use('/user', userRouter);
api.use('/login', loginRouter);
api.use('/collection', collectionRouter)

api.listen(port, function(err) {
  if(err) {
    throw err;
  } else {
    console.log(`Listen on port ${port}`)
  }
})