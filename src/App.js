import React, { Component } from 'react';
import './App.css';

import {ContactForm} from './components/ContactForm/ContactForm';
import {SearchField} from './components/SearchField/SearchField';
import {ContactList} from './components/ContactList/ContactList';

const filterContacts = (array, query) => {
  return array.filter(contact => contact.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
};

class App extends Component {

  state = {
    contacts: [    
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  // Handle behavior for Search field

  handleInputChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value});
  };

  // Define array of contacts to be shown

  contactsToShow = () => {
    const { contacts, filter } = this.state;
    const isFiltered = !!filter;
    return (isFiltered
      ? filterContacts(contacts, filter)
      : this.state.contacts)
  } 

  // Function to add new contact - goes to child

  addNewContact = (NewContact) => {
    this.setState(({contacts}) => {
      return {contacts: [...contacts, NewContact]}});
  }
  
  // Function to remove new contact - goes to child

  removeContact = (contactIDToRemove) => {
    this.setState(({contacts}) => {
      return {contacts: [...contacts.filter(({id}) => id !== contactIDToRemove)]}
    })
  }

  render() {
  const { filter, contacts } = this.state;
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} handleNewContact={this.addNewContact}></ContactForm>
      <h2>Contacts</h2>
      <SearchField filter={filter} onChange={this.handleInputChange}></SearchField>
      <ContactList contacts={this.contactsToShow()} onDelete={this.removeContact}></ContactList>
    </div>
  )}
}

export default App;
