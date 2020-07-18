import React, { useState } from 'react';
import './style.scss';
import withTheme from '../HOC/withTheme';

const InputForm = ({ onSubmit, theme }) => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const submit = event => {
    onSubmit(event, name, number);
    setName('');
    setNumber('');
  };
  const handleChange = event => {
    if (event.target.type === 'number') {
      return setNumber(event.target.value);
    } else {
      return setName(event.target.value);
    }
  };
  return (
    <div style={{ color: theme.fontColor, background: theme.bodybg }}>
      <h1>Phonebook</h1>
      <form onSubmit={submit} className="contactFormEl">
        <label>Name:</label>
        <input type="text" value={name} onChange={handleChange} />
        <label>Number:</label>
        <input type="number" value={number} onChange={handleChange} />
        <input
          type="submit"
          value="Add contact"
          className="contactFormEl__button"
        />
      </form>
    </div>
  );
};

export default withTheme(InputForm);
