import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const ContactsSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  });

  const handleSubmit = (values, actions) => {
    if (contacts.some(contact => contact.name.toLowerCase() === values.name.toLowerCase())) {
      alert(`${values.name} is already in contacts!`);
      return;
    }

    dispatch(addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <label className={css.name} htmlFor={nameFieldId}>Name</label>
        <Field className={css.field} type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label className={css.name} htmlFor={numberFieldId}>Number</label>
        <Field className={css.field} type="text" name="number" id={numberFieldId} />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;