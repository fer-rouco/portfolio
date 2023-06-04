import { useState } from "react";
import TextField from "../controls/fields/input/text-field";
import MailField from "../controls/fields/input/mail-field";
import TextAreaField from "../controls/fields/input/textarea-field";
import SubmitButton from "../controls/buttons/submit-button";
import "./contact-section.scss";
import Panel from "../containers/panel";
import Form from "../containers/form";

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = () => {
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
    <section id='contact-section' className='contact-section' >
      <h2 className='contact-section__header' >Contact me</h2>
      <Panel className='contact-form' >
        <Form onSubmit={onSubmit} >
          <fieldset className='contact-form__fieldset' >
            <TextField attr='name' label='Name' value={name} onChange={event => setName(event.target.value)} required ></TextField>
            <MailField attr='email' label='Email' value={email} onChange={event => setEmail(event.target.value)} required ></MailField>
            <TextAreaField attr='message' label='Message' value={message} onChange={event => setMessage(event.target.value)} required ></TextAreaField>                   
          </fieldset>
          <SubmitButton></SubmitButton>
        </Form>
      </Panel>
    </section>
  );
}

export default ContactSection;
