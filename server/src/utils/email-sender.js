const fs = require('fs');
const { google } = require('googleapis');
const { OAuth2 } = google.auth;

const accountTransport = require("../account_transport.json");

// Configuración de OAuth2
const CLIENT_ID = accountTransport.auth.clientId;
const CLIENT_SECRET = accountTransport.auth.clientSecret;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";

const oAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Ruta al archivo token.json donde se almacenará el token de acceso
const TOKEN_PATH = '../token.json';

// Alcance requerido para enviar correos electrónicos
const SCOPES = ['https://www.googleapis.com/auth/gmail.send'];

// Obtiene el enlace de autorización
const getAuthUrl = () => {
  return oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
};

// Obtiene el token de acceso utilizando el código de autorización
const getAccessToken = (code) => {
  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        reject(err);
      } else {
        // Almacena el token de acceso en el archivo token.json
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) {
            console.error('Error al guardar el token de acceso:', err);
            reject(err);
          } else {
            console.log('Token de acceso guardado correctamente');
            resolve(token);
          }
        });
      }
    });
  });
};

// Envía un correo electrónico utilizando la API de Gmail
const sendEmail = async (to, subject, message) => {
  try {
    // Verifica si ya tenemos un token de acceso guardado en el archivo token.json
    let token = fs.readFileSync(TOKEN_PATH);
    token = JSON.parse(token);

    // Configura las credenciales del cliente con el token de acceso
    oAuth2Client.setCredentials(token);

    // oauth2Client.setCredentials({
    //   refresh_token: accountTransport.auth.refreshToken,
    //   tls: {
    //       rejectUnauthorized: false
    //   }
    // });

    // Crea una instancia de la API de Gmail
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    // Crea el cuerpo del correo electrónico
    const email = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: createMessage(to, oAuth2Client.getUserInfo().email, subject, message),
      },
    });

    console.log('Correo electrónico enviado con éxito:', email.data);
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
};

// Crea el mensaje de correo electrónico en formato base64url
const createMessage = (to, from, subject, message) => {
  const emailData = [];
  emailData.push(`From: ${from}`);
  emailData.push(`To: ${to}`);
  emailData.push('Content-Type: text/html; charset=utf-8');
  emailData.push('MIME-Version: 1.0');
  emailData.push(`Subject: ${subject}`);
  emailData.push('');
  emailData.push(`${message}`);

  const encodedEmail = Buffer.from(emailData.join('\r\n')).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
  return encodedEmail;
};

module.exports = { getAuthUrl, getAccessToken, sendEmail };