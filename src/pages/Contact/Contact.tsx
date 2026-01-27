import React, { FormEvent, useState } from 'react';
import { useForm } from '@formspree/react';
import { Form as SemanticForm, Button, Message, Label } from 'semantic-ui-react';
import './Contact.css';

interface FormError {
  code: string;
  message: string;
  field?: string;
}

// Formspree form ID
const FORMSPREE_FORM_ID = 'mblnzwkr';

const Contact = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // The form data will be automatically handled by Formspree's handleSubmit
    handleSubmit(e);

    // Reset form if submission was successful
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div className="contact" id="contact">
      <h2>Get In Touch</h2>
      {state.succeeded ? (
        <Message positive>
          <Message.Header>Thank you for your message!</Message.Header>
          <p>I'll get back to you as soon as possible.</p>
        </Message>
      ) : (
        <>
          {state.errors && (
            <Message negative>
              <Message.Header>Something went wrong</Message.Header>
              <p>Please try again later or contact me directly at yaldar.hapak@gmail.com</p>
            </Message>
          )}
          <SemanticForm onSubmit={onSubmit} className="contact-form">
            <SemanticForm.Field>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {state.errors?.getFieldErrors('name')?.map((error: FormError | string, idx: number) => (
                <Label key={idx} basic color='red' pointing>
                  {typeof error === 'string' ? error : error?.message || 'Invalid field'}
                </Label>
              ))}
            </SemanticForm.Field>

            <SemanticForm.Field>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {state.errors?.getFieldErrors('email')?.map((error: FormError | string, idx: number) => (
                <Label key={idx} basic color='red' pointing>
                  {typeof error === 'string' ? error : error?.message || 'Invalid field'}
                </Label>
              ))}
            </SemanticForm.Field>

            <SemanticForm.Field>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              />
              {state.errors?.getFieldErrors('message')?.map((error: FormError | string, idx: number) => (
                <Label key={idx} basic color='red' pointing>
                  {typeof error === 'string' ? error : error?.message || 'Invalid field'}
                </Label>
              ))}
            </SemanticForm.Field>

            <Button
              type="submit"
              primary
              disabled={state.submitting}
              loading={state.submitting}
            >
              Send Message
            </Button>
          </SemanticForm>
        </>
      )}
    </div>
  );
};

export default Contact;