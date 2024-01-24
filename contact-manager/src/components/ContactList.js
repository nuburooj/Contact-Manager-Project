import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);
  const inputEl = useRef("");
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = (e) => {
    // console.log(inputEl.current.value)
    props.searchKeyword(inputEl.current.value)
  }
    
  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input ref={inputEl} className="prompt" type="text" placeholder="Search Contacts" value={ props.term} onChange={getSearchTerm} />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui called list">{renderContactList.length > 0 ? renderContactList : "No Contacts to display"}</div>
    </div>
  );
};

export default ContactList;