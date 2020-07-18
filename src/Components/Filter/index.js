import React, { useState } from 'react';
import withTheme from '../HOC/withTheme';
import './styles.scss';

const Filter = ({ onFilter, theme }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div
      className="contactFormSearch"
      style={{
        color: theme.fontColor,
        background: theme.bodybg,
      }}
    >
      <h2>Contacts</h2>
      <form>
        <label>Find a contact: </label>
        <input type="text" value={value} onChange={handleChange} />
      </form>
    </div>
  );
};

export default withTheme(Filter);
