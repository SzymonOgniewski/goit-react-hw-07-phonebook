import React from 'react';
import { ContactList } from './ContactsList/ContactList';
import css from './contacts.module.css';
import { Filter } from './Filter/Filter';

export const Contacts = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
