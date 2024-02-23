import React from 'react';
import Contact from './Contact';
const ContactList = (props) => {
    console.log(props);
    const deletecontactHandler  =(id)=>{
        props.getContactId(id)
    }
    const renderedContactList = props.contacts.map((contact) => {
        return (
            <Contact contact ={contact}
                clickHandler={deletecontactHandler}
            />
        );
    });

    return (
        <div className="max-w-2xl mx-auto mt-5">
            <h1 className="text-xl font-semibold text-gray-800 mb-4">Contact List</h1>
            {renderedContactList}
        </div>
    );
};

export default ContactList;
