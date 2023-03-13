import React from 'react';
import { Input } from './FormInput/FormInput';
import css from './form.module.css';
import { useDispatch } from 'react-redux';
import { addContactAction } from 'components/Contacts/redux/contactsSlice';
export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContactAction(name, number));
    form.reset();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <Input
          placeholder="Enter Name"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          inputName="name"
          label="Name"
          htmlFor="name"
        />
        <Input
          placeholder="Enter phone number"
          type="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          inputName="number"
          label="Phone number"
          htmlFor="phone number"
        />
        <button className={css.formButton} type="submit">
          ADD CONTACT
        </button>
      </form>
    </div>
  );
};
