import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleAddContact = (contact)=> {
    this.setState(({contacts}) => (
      contacts.find(el => el.name === contact.name)
        ? alert(`${contact.name} is already in contacts`)
        : { contacts: [contact, ...contacts] }
    ));
      // contacts: [...prev.contacts, contact]
    
  }
  
  changeFilter = (e) => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    // console.log(filter);
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
  render() {
    const {filter} = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact = {this.handleAddContact}/>

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter}/>
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}
