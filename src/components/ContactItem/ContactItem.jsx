import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import {
  deleteContactFromStore,
  getContactsFromStore,
} from '../../redux/contacts/contacts.thunk';
import { editContactFromStore } from '../../redux/contacts/contacts.thunk';
import {
  StyledDialogContent,
  StyledLi,
  StyledNameP,
  StyledNamePhone,
  StyledNumberP,
  StyledWrapper,
  StyledWrapperButton,
} from './ContactItem.styled';
import EditIcon from '@mui/icons-material/Edit';
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContactFromStore(id));
  };

  const [editedName, setEditedName] = useState('');
  const [editedNumber, setEditedNumber] = useState('');
  const [editedId, setEditedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    console.log('handleOk');
    setIsModalOpen(false);
    const contact = { name: editedName, number: editedNumber };
    dispatch(editContactFromStore({ id: editedId, contact }));
    dispatch(getContactsFromStore());
  };

  const showModal = (name, number, id) => {
    setEditedNumber(number);
    setEditedName(name);
    setEditedId(id);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledLi>
        <StyledWrapper>
          <Avatar
            sx={{
              bgcolor: 'primary.main',
            }}
          >
            {name.slice(0, 1).toUpperCase()}
          </Avatar>
          <StyledNamePhone>
            <StyledNameP>{name}</StyledNameP>
            <StyledNumberP>{number}</StyledNumberP>
          </StyledNamePhone>
        </StyledWrapper>

        <StyledWrapperButton>
          <IconButton
            name="edit"
            color="primary"
            onClick={() => showModal(name, number, id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            name="delete"
            color="error"
            onClick={() => handleDelete(id)}
          >
            <HighlightOffIcon />
          </IconButton>
        </StyledWrapperButton>

        <Dialog open={isModalOpen} onClose={handleCancel}>
          <DialogTitle>Edit contact</DialogTitle>
          <DialogContentText></DialogContentText>
          <StyledDialogContent>
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              value={editedName}
              onChange={e => {
                setEditedName(e.target.value);
              }}
              required
            />

            <TextField
              label="Number"
              variant="outlined"
              type="tel"
              name="number"
              value={editedNumber}
              onChange={e => {
                setEditedNumber(e.target.value);
              }}
              required
            />
          </StyledDialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button onClick={handleOk}>Ok</Button>
          </DialogActions>
        </Dialog>
      </StyledLi>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
