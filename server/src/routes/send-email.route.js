const express = require('express');
const sendEmailRoute = express.Router();
const {sendEmail} = require('../utils/email-sender.js');

// Ruta para enviar el correo electrónico desde el formulario
sendEmailRoute.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  sendEmail(email, name, message)
    .then(() => {
      res.json({ success: true });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al enviar el correo electrónico' });
    });
});


module.exports = sendEmailRoute;