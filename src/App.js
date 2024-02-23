import './index.css';
import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import { nanoid } from 'nanoid';



function App() {
  const LOCAL_STORAGE_KEY ="contacts"
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler=(contact)=>{
    console.log(contact)
    setContacts([...contacts , { id: nanoid() , ...contact}])
  }
  const removeContactHandler=(id)=>{
    const newContactList =contacts.filter((contact)=>{
      return contact.id !== id;
    })
    setContacts(newContactList)
  }
  
  useEffect(()=>{
    const retriveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(retriveContacts) setContacts(retriveContacts)
  },[])
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY ,JSON.stringify(contacts))
  },[contacts])
  return (
    <div>
    <Header />
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    <Contact />
    
    
    </div>
  )
}

export default App;
