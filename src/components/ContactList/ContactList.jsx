import { ContactListItem } from './ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter, getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactFilter);

  const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

  
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactListItem key={id} name={name} number={number} id={id}/>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//}