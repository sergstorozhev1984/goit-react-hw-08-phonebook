import { ContactListItem } from './ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter, getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts.thunk';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  useEffect(()=>{
    dispatch(fetchContacts());
  }, [dispatch])
  
  
  const filter = useSelector(getContactFilter);

  const filteredContacts = () => contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  
  return (
    <ul className={css.contactList}>
      {filteredContacts().map(({ name, number, id }) => (
        <ContactListItem key={id} name={name} number={number} id={id}/>
      ))}
    </ul>
  );
};
