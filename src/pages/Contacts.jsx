import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { UserMenu } from 'components/UserMenu/UserMenu';
import {   useSelector } from 'react-redux';
import { getIsloading} from 'redux/selectors';
import css from '../components/App.module.css';

export const Contacts = () => {
  const isLoading = useSelector(getIsloading);
  
  return (
    <Container>
      <UserMenu/>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={css.subTitle}>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      <ContactList />
    </Container>
  );
};
