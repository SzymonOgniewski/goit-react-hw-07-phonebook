import { Msg } from './message/Msg';
import { Form } from './form/Form';
import { Contacts } from './Contacts/Contacts';
import { useSelector } from 'react-redux';
import { selectContacts, selectPendingState } from './redux/selectors';
import { useEffect } from 'react';
import { getAllContactsThunk } from './redux/contacts/contacts.thunk';
import { useDispatch } from 'react-redux';
export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isPending = useSelector(selectPendingState);
  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);
  return (
    <>
      <Form />
      {isPending && <div>Loading...</div>}
      {contacts.length === 0 ? (
        <>
          <Msg>
            There are no contacts to display. Add contacts to see the list.
          </Msg>
        </>
      ) : (
        <Contacts />
      )}
    </>
  );
};
