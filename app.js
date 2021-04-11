const express = require('express'),
  multer = require('multer'),
  upload = multer(),
  app = express(),
  router = require('./router');

app
  .set('port', 80)
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(upload.array())
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
  })
  .use("/api/v1", router);

app.listen(app.get('port'), () => {
  console.log(`servidor corriendo en el puerto ${app.get('port')}`);
})
