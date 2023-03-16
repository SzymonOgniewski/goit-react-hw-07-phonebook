import { Msg } from './message/Msg';
import { Form } from './form/Form';
import { Contacts } from './Contacts/Contacts';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectPendingState,
  selectError,
} from './redux/selectors';
import { useEffect } from 'react';
import { getAllContactsThunk } from './redux/contacts/contactsThunks';
import css from './app.module.css';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isPending = useSelector(selectPendingState);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);
  return (
    <>
      <Form />
      {isPending && !error && <div className={css.loader}>Loading...</div>}
      {contacts.length === 0 ? <Msg /> : <Contacts />}
    </>
  );
};
