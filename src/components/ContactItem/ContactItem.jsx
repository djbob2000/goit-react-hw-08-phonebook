import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactFromStore } from '../../redux/contacts/contacts.thunk';
import { editContactFromStore } from '../../redux/contacts/contacts.thunk';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactFromStore(id));
  };

  const handleEdit = id => {
    dispatch(editContactFromStore(id));
  };

  return (
    <>
      <li className={css.list__item}>
        <p className={css.item__name}>
          {name}: <span className={css.item__phone}>{number}</span>
        </p>
        <button className={css.button__delete} onClick={() => handleEdit(id)}>
          Edit
        </button>
        <button className={css.button__delete} onClick={() => handleDelete(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
