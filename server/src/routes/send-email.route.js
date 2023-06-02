const express = require('express');
const sendMail = require('../email/gmail');
const sendEmailRoute = express.Router();

// Ruta para enviar el correo electrónico desde el formulario
sendEmailRoute.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const buildOptionsAndSendMail = async () => {
    // const fileAttachments = [
    //   {
    //     filename: 'attachment1.txt',
    //     content: 'This is a plain text file sent as an attachment',
    //   },
    //   {
    //     path: path.join(__dirname, './attachment2.txt'),
    //   },
    //   {
    //     filename: 'websites.pdf',
    //     path: 'https://www.labnol.org/files/cool-websites.pdf',
    //   }, 
    //   {
    //     filename: 'image.png',
    //     content: fs.createReadStream(path.join(__dirname, './attach.png')),
    //   },
    // ];
  
    const options = {
      to: 'rouco.fernando@gmail.com',
      // cc: 'cc1@example.com, cc2@example.com',
      // replyTo: 'amit@labnol.org',
      subject: `${name} - ${email}`,
      // text: 'This email is sent from the command line',
      // html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b> from <a href="https://digitalinspiration.com">Digital Inspiration</a>.</p>`,
      html: message,
      // attachments: fileAttachments,
      textEncoding: 'base64',
      headers: [
        { key: 'X-Application-Developer', value: 'Fernando Nicolás Rouco' },
        { key: 'X-Application-Version', value: 'v1.0' },
      ],
    };
  
    const messageId = await sendMail(options);
    return messageId;
  };
  
  buildOptionsAndSendMail()
    .then((messageId) => console.log('Message sent successfully:', messageId))
    .catch((error) => console.error(error));
});


module.exports = sendEmailRoute;