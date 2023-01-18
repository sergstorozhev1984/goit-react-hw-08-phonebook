import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactListItem.module.css';

export const ContactListItem = ({name, number, id}) => {
  const dispatch = useDispatch();

  const removeContact = () => {
    dispatch(deleteContact(id))
  };

  return (
    <li className={css.item}>
      <span className={css.name}>{name}:</span>
      <span>{number}</span>
      <button className={css.deleteBtn} type="button" onClick={removeContact}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}