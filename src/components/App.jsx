import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from '../components/App.module.css';
import { Loader } from './Loader/Loader';
import { getIsloading } from 'redux/selectors';
import { useSelector } from 'react-redux';


export const App = () => {
  const  isLoading = useSelector(getIsloading);

    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm  />
        <h2 className={css.subTitle}>Contacts</h2>
        <Filter />
        {isLoading && <Loader/>}
        <ContactList />
        <ToastContainer />
      </div>
    );
  
}
