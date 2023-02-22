import React from 'react';
// import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactsSliceAction } from '../../redux/filter/filter.slice';
import { selectFilter } from '../../redux/selectors';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleOnChange = event => {
    dispatch(filterContactsSliceAction(event.target.value));
  };

  return (
    <>
      <h4>Contacts in your phonebook</h4>
      <TextField
        sx={{ width: '500px', mb: '20px' }}
        label="Find contacts by name"
        variant="outlined"
        type="text"
        name="filter"
        value={filter}
        placeholder="type name here"
        onChange={event => handleOnChange(event)}
      />
    </>
  );
};

export default Filter;
