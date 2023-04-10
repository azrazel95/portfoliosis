import React, { useState } from 'react';
import axios from 'axios';

// Here we import a helper function that will check if the email is valid
import {  validateEmail} from '../../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'Name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !Name) {
      setErrorMessage('Email or Name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!Message) {
      setErrorMessage(
        `Please enter a Message!`
      );
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
<div className='justify-center'>
<div className="bg-blue mx-8 border-gray-950 w-full p-8 flex justify-center font-sans">
<div className="rounded bg-gray-600 border-black w-64 p-2">
  <h1 className='text-white'> Contact me</h1>

    <div className="flex justify-between py-1">
      <form className="form">
        <input className="bg-white p-2 rounded mt-2 border-b border-grey cursor-pointer hover:bg-grey-lighter"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input className="bg-white p-2 rounded mt-2 border-b border-grey cursor-pointer hover:bg-grey-lighter"
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input className="bg-white p-2 rounded mt-2 border-b border-grey cursor-pointer hover:bg-grey-lighter"
          value={Message}
          name="Message"
          onChange={handleInputChange}
          type="Message"
          placeholder="Message"
        />
        <div className='justify-center'>
          <a href="mailto:`beni.sprenger@hotmail.com`?subject='you've got mail!'&body{body}">
        <button className="bg-white p-2 rounded mt-2 border-b border-grey cursor-pointer hover:bg-grey-lighter" type="button" onClick={handleFormSubmit}>Submit</button></a>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    </div>
    </div>
</div>
  );
}

export default Form;
