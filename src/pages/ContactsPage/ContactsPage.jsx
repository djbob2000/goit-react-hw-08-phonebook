import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Heading, StyledWrapper } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <StyledWrapper>
      <Heading>Add new contact</Heading>

      <ContactForm />

      <Filter />

      <ContactList />
    </StyledWrapper>
  );
};

export default ContactsPage;
