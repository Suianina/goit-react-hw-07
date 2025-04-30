import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  return (
    <div className={css.box}>
      <ul className={css.list}>
        <li className={css.item}>
          <FaUser className={css.icon} />
          <p className={css.text}>{name}</p>
        </li>
        <li className={css.item}>
          <FaPhoneAlt className={css.icon} />
          <p className={css.text}>{number}</p>
        </li>
      </ul>
      <button type='button' className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;