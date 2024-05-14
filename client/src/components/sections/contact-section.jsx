import { useState } from "react";
import Panel from "../containers/panel";
import Form from "../containers/form";
import TextField from "../controls/fields/input/text-field";
import MailField from "../controls/fields/input/mail-field";
import TextAreaField from "../controls/fields/input/textarea-field";
import { useTranslation } from "react-i18next";
import { useTheme } from '../../contexts/theme-context';
import "./contact-section.scss";

function ContactSection() {
  const { theme } = useTheme();
  const { t } = useTranslation('components', { keyPrefix: 'sections.contact' });
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
      <h2 className='contact-section__header' >{t('title')}</h2>
      <div className='contact-section__form' >
        <Panel className='contact-form' >
          <Form onSubmit={onSubmit} modelState={modelState} >
            <fieldset className='contact-form__fieldset' >
              <TextField attr='name' label={t('form.fields.name')} required ></TextField>
              <MailField attr='email' label={t('form.fields.email')} required ></MailField>
              <TextAreaField attr='message' label={t('form.fields.message')} required ></TextAreaField>                
            </fieldset>
          </Form>
        </Panel>
      </div>
    </section>
  );
}

export default ContactSection;
