import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { v4 as idGnr } from 'uuid'
import api from '../api/contacts';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';


function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get('/contacts')
    return response.data;
  }

  const addContactHandler = async (contact) => {
    // console.log(contact);
    const request = {
      id: idGnr(),
      ...contact
    }
    
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data])
    // console.log(response)
    // we are accessing the contacts already present in local storage
    // let exsContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // we are setting the updated contacts array in which new contacts will be added
    //let updatedContacts=[]
    // if there are contacts present, then add contacts and unique ids to updated contacts array
    //if(exsContacts.length > 0){
      //updatedContacts = [...exsContacts, { id: idGnr(), ...contact }]
      // if there are no contacts, make this the first one
   // }else{
     // updatedContacts = [{ id: idGnr(), ...contact }]
    
    
     
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
    // setContacts(updatedContacts)
  }

    const updateContactHandler = () => {}

    const removeContactHandler = async (id) => {
      await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id
      })
      setContacts(newContactList);
    }

    const searchHandler = (e) => {}
    


  useEffect(() => {
    // console.log("useEffect - Retrieving data from local storage");

    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  // console.log(retrieveContacts)
    // if (retrieveContacts) setContacts(retrieveContacts);
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts)
    };

    getAllContacts();
  }, []);

  // useEffect(() => {
  //   console.log("useEffect - Storing data in local storage");
  //  // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // },[contacts]);


  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<ContactList 
            contacts={contacts} 
            getContactId={removeContactHandler} 
            term={searchTerm} 
            searchKeyword={searchHandler}
            />} 
            />
          <Route 
            path="/add" 
            element={<AddContact 
            addContactHandler={addContactHandler} 
            />} 
            />
          <Route 
            path="/edit/:id" 
            element={<EditContact 
            updateContactHandler={updateContactHandler} 
            />} 
            />
          <Route path="/contact/:id" component={ContactDetail} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
