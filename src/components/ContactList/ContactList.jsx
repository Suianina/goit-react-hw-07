import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactSlice'; // шлях виправ, якщо інший
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;