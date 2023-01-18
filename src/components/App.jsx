import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import css from '../components/App.module.css';


export const App = () => {

    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm  />
        <h2 className={css.subTitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  
}
