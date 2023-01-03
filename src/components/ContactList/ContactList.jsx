import { ContactListItem } from './ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
export const ContactList = ({ contacts, onRemoveContact}) => {
  console.log(contacts);
  return (
    <ul className={css.contactList}>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem key={id} name={name} number={number} id={id} onRemoveContact={onRemoveContact}/>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}