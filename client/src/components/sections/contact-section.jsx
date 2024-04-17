import { useState } from "react";
import Panel from "../containers/panel";
import Form from "../containers/form";
import TextField from "../controls/fields/input/text-field";
import MailField from "../controls/fields/input/mail-field";
import TextAreaField from "../controls/fields/input/textarea-field";
import { useTheme } from '../../contexts/theme-context';
import "./contact-section.scss";

function ContactSection() {
  const { theme } = useTheme();
  const modelState = useState({ name: '', email: '', message: '' });
  const [model] = modelState;
  
  const onSubmit = (model) => {
    const { name, email, message } = model;

    fetch('http://localhost:4000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Email sent successfully!');
      // Hacer algo después de enviar el correo electrónico, como mostrar un mensaje de éxito o redireccionar a otra página.
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      // Manejar el error, mostrar un mensaje de error, etc.
    });
  }

  return (
    <section id='contact-section' className={`contact-section ${theme}`} >
      <h2 className='contact-section__header' >Contact me</h2>
      <div className='contact-section__form' >
        <Panel className='contact-form' >
          <Form onSubmit={onSubmit} modelState={modelState} >
            <fieldset className='contact-form__fieldset' >
              <TextField attr='name' label='Name' required ></TextField>
              <MailField attr='email' label='Email' required ></MailField>
              <TextAreaField attr='message' label='Message' required ></TextAreaField>                
            </fieldset>
          </Form>
        </Panel>
      </div>
    </section>
  );
}

export default ContactSection;
