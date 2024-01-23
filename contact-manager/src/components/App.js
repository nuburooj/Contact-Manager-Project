import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as idGnr } from 'uuid'
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList'

function App() {
  const LOCAL_STORAGE_KEY = 'contacts'
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    // console.log(contact);

    // we are accessing the contacts already present in local storage
    let exsContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // we are setting the updated contacts array in which new contacts will be added
    let updatedContacts=[]
    // if there are contacts present, then add contacts and unique ids to updated contacts array
    if(exsContacts.length>0){
      updatedContacts = [...exsContacts, { id: idGnr(), ...contact }]
      // if there are no contacts, make this the first one
    }else{
      updatedContacts = [{ id: idGnr(), ...contact }]
    }
    
     
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
    setContacts(updatedContacts)
  }

  useEffect(() => {
    console.log("useEffect - Retrieving data from local storage");

    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  console.log(retrieveContacts)
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  // useEffect(() => {
  //   console.log("useEffect - Storing data in local storage");
  //  // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // },[contacts]);

  return (
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
