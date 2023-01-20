import { ContactListItem } from './ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContactFilter, getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactFilter);

  const filteredContacts = () => contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  
  return (
    <div>777</div>
    // <ul className={css.contactList}>
    //   {filteredContacts().map(({ name, number, id }) => (
    //     <ContactListItem key={id} name={name} number={number} id={id}/>
    //   ))}
    // </ul>
  );
};
