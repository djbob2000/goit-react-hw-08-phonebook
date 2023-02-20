import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsFromStore } from '../../redux/contacts/contacts.thunk';

import ContactItem from '../ContactItem/ContactItem';
import Loader from '../Loader/Loader';
import { selectFilteredContacts, selectIsLoading } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContactsFromStore());
  }, [dispatch]);

  return (
    <>
      {!isLoading && (
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default ContactList;
