import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    // console.log(contact);
    setContacts([...contacts, contact])
  }

  useEffect(() => {
    console.log("useEffect - Retrieving data from local storage");

    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    console.log("useEffect - Storing data in local storage");
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
