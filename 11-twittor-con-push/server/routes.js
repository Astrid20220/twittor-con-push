// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


const mensajes = [

  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  }

];


// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});


// Post mensaje
router.post('/', function (req, res) {
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push( mensaje );

  console.log(mensajes);


  res.json({
    ok: true,
    mensaje
  });
});

//Almacenar la suscripcion
router.post('/subscribe', (req, res) =>{

  res.json('subscribe');

});

//Almacenar la suscripcion
router.get('/key', (req, res) =>{

  res.json('key publico');
  
});

//Enviar una notificacion  PUSH a las personas
//que nosotros queramos
//ES ALGO que se controla del lado del server
router.post('/push', (req, res) =>{

  res.json('key publico');
  
});
module.exports = router;