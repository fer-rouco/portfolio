// Parte de este codigo y la configuracion de google cloud la saque de este video: https://www.youtube.com/watch?v=W3jGtgva46w

const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const accountTransport = require("../account_transport.json");

const sendEmail = (name, email, message) => {
  // // Configura el transporte SMTP con las credenciales de tu cuenta de Gmail
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'rouco.fernando@gmail.com',
  //     pass: 'TerrabusiX3',
  //   },
  // });


  // try {
  //   // Envía el correo electrónico
  //   await transporter.sendMail({
  //     from: 'rouco.fernando@gmail.com',
  //     to: email,
  //     subject: 'Nuevo mensaje de formulario',
  //     text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
  //   });

  //   console.log('Correo electrónico enviado exitosamente');
  // } catch (error) {
  //   console.error('Error al enviar el correo electrónico:', error);
  //   throw error;
  // }

  send((json) => {
    // json.mail.sendMail({
    //   from: 'rouco.fernando@gmail.com',
    //   to: email,
    //   subject: 'Nuevo mensaje de formulario',
    //   text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
    // }).then(() => {
    //   console.log('Correo electrónico enviado exitosamente');
    // }).catch((error) => {
    //   console.error('Error al enviar el correo electrónico:', error);
    //   throw error;
    // });
  });
};

const mail_rover = async (callback) => {
  const oauth2Client = new OAuth2(
      accountTransport.auth.clientId,
      accountTransport.auth.clientSecret,
      "https://developers.google.com/oauthplayground",
  );
  oauth2Client.setCredentials({
      refresh_token: accountTransport.auth.refreshToken,
      tls: {
          rejectUnauthorized: false
      }
  });
  oauth2Client.getAccessToken((error, token) => {
      if (error)
        return console.log(error);

      accountTransport.auth.accessToken = token;
      callback(nodemailer.createTransport(accountTransport));
  });
};

function send(/*idAplicativo, */calback) {
  // var id = 0;
  // try {
  //     var id = parseInt(idAplicativo);
  // } catch (error) {
  //     console.log(`error parse idAplicativo feedback.js ${error}`)
  // }
  mail_rover(function (emailTransporter) {
      // switch (id) {
      //     case _ID_APP_1:
      //         json = {
      //             url: _SERVER + 'check/', mail: emailTransporter, app: 'CHECK', from: 'Check <check@planck.biz>',
      //             to: 'CHECK <check@planck.biz>',
      //             slogan: '😋 Comida exquisita, entregas simples. 🛵 Compra YA! 👇🏻',
      //             body_bienvanida: 'Mensaje personalizado', head_bienvanida: 'En Check pide a tu local favorito, o chatea con un asesor por medicina, y te lo llevamos lo antes posible.',
      //             bcc: 'Info <planck.biz@gmail.com>', head: head, footer: footer
      //         };
      //         return calback(json);
      //     default:
              json = {
                  url: _SERVER + 'check/', mail: emailTransporter, app: 'CHECK', from: 'Check <check@planck.biz>',
                  to: 'CHECK <check@planck.biz>',
                  slogan: '😋 Comida exquisita, entregas simples. 🛵 Compra YA! 👇🏻',
                  body_bienvanida: 'Mensaje personalizado', head_bienvanida: 'En Check pide a tu local favorito, o chatea con un asesor por medicina, y te lo llevamos lo antes posible.',
                  bcc: 'Info <planck.biz@gmail.com>', head: head, footer: footer
              };
              return calback(json);
      // }
  });
}


module.exports = sendEmail;