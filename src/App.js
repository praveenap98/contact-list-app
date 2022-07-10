import React, { useEffect, useState } from 'react';
import './App.css'
import ContactCard from './components/ContactCard'

const App = () => {
    const[contactsArray, setContactsArray] = useState([]);

    useEffect(() => {
        const contactsGetter = async() => {
            let contacts;
            let response = await fetch('https://randomuser.me/api/?results=5');
            response = await response.json();
            contacts = response.results;
            console.log(contacts);
            setContactsArray(contacts);
        }
        contactsGetter();
    }, []);

    return(
        <div className='main-container'>
            <h1>Contact List</h1>
            <div className='card-container'>
                {
                    contactsArray.map((contact, index) => <ContactCard key={index} contact={contact}/>)
                }
            </div>
        </div>
    )
}

export default App;