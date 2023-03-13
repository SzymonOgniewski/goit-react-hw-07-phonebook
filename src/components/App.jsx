import { Msg } from './message/Msg';
import { Form } from './form/Form';
import { Contacts } from './Contacts/Contacts';
import { useSelector } from 'react-redux';
import { getContacts } from './Contacts/redux/selectors';
import { useEffect } from 'react';
export const App = () => {
  const contacts = useSelector(getContacts);
  useEffect(() => {
    localStorage.setItem('savedContacts', `${JSON.stringify(contacts)}`);
  }, [contacts]);
  return (
    <>
      <Form />
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
