import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import css from './ContactListItem.module.css';
// import { getIsloading } from 'redux/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts.thunk';

export const ContactListItem = ({name, number, id}) => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsloading)
// useEffect(() => {
//   dispatch(fetchContacts())
// }, []);
  

  return (
    <li className={css.item}>
      <span className={css.name}>{name}:</span>
      <span>{number}</span>
      <button className={css.deleteBtn} type="button">Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}