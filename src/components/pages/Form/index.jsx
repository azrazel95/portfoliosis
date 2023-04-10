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
    if (!validateEmail(email) || !Name || !Message) {
      setErrorMessage(<div class="flex rounded ml-20 items-center bg-gray-600 text-white text-sm font-bold px-4 py-3" role="alert">
      <svg class="fill-current  w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
      <p>Uh-Oh! Please make sure to fill out all the Fields</p>
    </div>);
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
<div className="bg-blue  md:mb-110 mb-102 border-gray-950 w-full p-8 flex justify-center font-sans">
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
        <button className="bg-white p-2 rounded mt-2  cursor-pointer hover:bg-yellow-300" type="button" onClick={handleFormSubmit}>Submit</button></a>
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
