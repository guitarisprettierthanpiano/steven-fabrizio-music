/*everything below is exactly as it is from https://formspree.io/forms/mjvjgazo/integration 
*/


// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import * as React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mjvjgazo");
  if (state.succeeded) {
      return <p className='submitted'>Message Sent!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        E-mail Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="noob@aol.com"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
