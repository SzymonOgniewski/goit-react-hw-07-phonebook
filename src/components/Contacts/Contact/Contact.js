import { useDispatch } from 'react-redux';
import css from './contact.module.css';
import { deleteContactAction } from '../redux/contactsSlice';
import PropTypes from 'prop-types';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContactAction(contact.id));
  };
  return (
    <>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button
        type="button"
        className={css.delBtn}
        onClick={handleDeleteContact}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
