import React from 'react';
import css from './contactlist.module.css';
import { getContacts, getFilter } from '../redux/selectors';
import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const list = filteredList.map(contact => (
    <li key={contact.id} className={css.item}>
      <Contact contact={contact} />
    </li>
  ));

  return <ul className={css.list}>{list}</ul>;
};
