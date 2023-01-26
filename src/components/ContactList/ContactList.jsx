import { ContactListItem } from './ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/contacts/contacts.thunk';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(state => state.auth.isLoggedIn)
  useEffect(() => {
    if(!isUserLoggedIn) return;
    dispatch(fetchContacts());
  }, [isUserLoggedIn, dispatch]);

  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactListItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};
