import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Container, Heading } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <Container>
      <Heading>Contacts</Heading>

      <ContactForm />

      <Filter />

      <ContactList />
    </Container>
  );
};

export default ContactsPage;
