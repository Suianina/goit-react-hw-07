import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default ContactList;