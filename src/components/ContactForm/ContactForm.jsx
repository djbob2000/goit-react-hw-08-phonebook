import React, { useState } from 'react';
// import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
import { selectContacts } from '../../redux/selectors';
import { addContactToStore } from '../../redux/contacts/contacts.thunk';
import { Button, TextField } from '@mui/material';
import { StyledForm, styledForm } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState(() => localStorage.getItem('name') ?? '');
  const [number, setNumber] = useState(
    () => localStorage.getItem('number') ?? ''
  );

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        // localStorage.setItem('name', JSON.stringify(value));
        localStorage.setItem('name', value);
        setName(value);
        break;

      case 'number':
        // localStorage.setItem('number', JSON.stringify(value));
        localStorage.setItem('number', value);
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    //contacts.some is not a function error because mutable state.contacts in slice
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      setName('');
      localStorage.removeItem('name');
      return;
    }

    // const contact = { id: nanoid(), name, phone };
    // const contact = { name, phone };
    console.log(' name  :>>', { name });
    console.log(' number  :>>', { number });
    // dispatch(addContactToStore(contact));
    dispatch(addContactToStore({ name, number }));
    //contact in actions in slice - is payload
    localStorage.removeItem('name');
    localStorage.removeItem('number');

    setName('');
    setNumber('');
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />

        <TextField
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />

        <Button variant="contained" type="submit" disabled={!name || !number}>
          Add contact
        </Button>
      </StyledForm>
    </>
  );
};

export default ContactForm;
