import React from 'react';
import PropTypes from 'prop-types';
import withTheme from '../HOC/withTheme';
import './style.scss';

const Contact = ({ contacts, filterValue, deleteCon, theme }) => {
  const handleDelete = e => {
    return deleteCon(e.target.value);
  };

  const filterForm = el => {
    return (
      <li key={el.id} className="contactCard">
        <p>{el.nam}: </p>
        <p>{el.number}</p>
        <button
          className="contactCard__btn"
          value={el.id}
          onClick={handleDelete}
        >
          Delete
        </button>
      </li>
    );
  };

  const filter = (filterValue, el) => {
    if (filterValue) {
      if (el.nam.toLowerCase().includes(filterValue.toLowerCase())) {
        return filterForm(el);
      } else {
        return <></>;
      }
    } else {
      return filterForm(el);
    }
  };

  return (
    <ul
      className="contactList"
      style={{ color: theme.fontColor, background: theme.bodybg }}
    >
      {contacts.map(el => {
        return filter(filterValue, el);
      })}
    </ul>
  );
};

Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
};

Contact.defProps = {
  filterValue: '',
};

export default withTheme(Contact);
