import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
    handleNewContact: PropTypes.func.isRequired
  }
  
  state = {
    name: '',
    number: ''
  }

  // Handle behavior for Input field

  handleInputChange = ({ target }) => {
    this.setState({[target.name]: target.value});
  };

  // Fuctions to add new contact to list

  addContact = () => {
    const { handleNewContact } = this.props;
    const NewContact = this.createContact();
    handleNewContact(NewContact);
  }

  createContact = () => {
    const { name, number } = this.state;
    return {
      id: uuidv4(),
      name,
      number
    }
  }

  // Define behavior on form submit

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.state.name === "") {return};
    this.isNewContact()
      ? this.addContact()
      : alert(`${this.state.name} is already exist!`)
    this.setState({
      name: '',
      number: ''
    });
  }

  // Check if contact is new or existing

  isNewContact = () => {
    const { contacts } = this.props;
    return !contacts.find(({ name }) => name.toLowerCase() === this.state.name.toLowerCase());
  }

  render () {
  const { name, number } = this.state;
  return (
  <form onSubmit={this.handleSubmit}>
    <label htmlFor="name_input">Name</label>
    <input id="name_input" name="name" type="text" value={name} placeholder="Input name..." onChange={this.handleInputChange}></input>
    <label htmlFor="number_input">Phone</label>
    <input id="number_input" name="number" type="text" value={number} placeholder="Input number..." onChange={this.handleInputChange}></input>
    <input type="submit" value="Add contact"></input>
  </form>
  )}
};

export {ContactForm};