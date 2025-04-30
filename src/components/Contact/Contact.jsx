import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}