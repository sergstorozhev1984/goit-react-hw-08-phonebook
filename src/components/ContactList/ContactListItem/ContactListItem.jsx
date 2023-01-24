import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts.thunk';
import css from './ContactListItem.module.css';

export const ContactListItem = ({name, number, id}) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <span className={css.name}>{name}:</span>
      <span>{number}</span>
      <button className={css.deleteBtn} type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}