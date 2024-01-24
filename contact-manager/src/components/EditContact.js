import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
const EditContact = (props) => {

    const {id} = useParams()
 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');

//   const update = (e) => {
//     e.preventDefault();
//     if (name === "" || email === "") {
//       alert("All the fields are mandatory!");
//       return;
//     }
//     props.updateContactHandler({ id, name, email });
//     setName("");
//     setEmail("");
//     props.history.push("/");
//   };

useEffect(()=>{
    
    fetch(`http://localhost:3006/contacts/${id}`).then((res) => res.json()).then((data) => {
        console.log(data)
        setName(data.name)
        setEmail(data.email)
    })
},[])

const handleSubmit =async()=>{

   const res =  await fetch(`http://localhost:3006/contacts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    });
    const json =await res.json()
    alert('updated! go back')

}

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
