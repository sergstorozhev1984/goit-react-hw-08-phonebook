import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import css from '../components/App.module.css';
const LOCAL_KEY = 'contacts'
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount(){
    const localContacts = localStorage.getItem(LOCAL_KEY);
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(_, prevState){
    if (prevState.contacts!== this.state.contacts) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(this.state.contacts))
    }
  }

  handleAddContact =  contact => {
    const sameContact = this.state.contacts
    .find(el => el.name === contact.name);
    if (sameContact) {
      alert(`${ contact.name} is already in contacts`);
    } else {
      const newContact = {...contact, id: nanoid()};
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }

      
    
  };

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value.toLowerCase() });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  removeContact = contactId => {
    this.setState(prev => {
      return {
        contacts: prev.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />

        <h2 className={css.subTitle}>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}
