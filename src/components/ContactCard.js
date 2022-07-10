import React, { useState } from 'react';
import './ContactCard.css';

const ContactCard = ({contact}) => {
    const [displayStatus, setDisplayStatus] = useState(false);

    const clickHandler = () => {
        console.log('clicked')
        setDisplayStatus(!displayStatus);
    }

    const getExtraInfos = () => {
        return(
            <>
                <p>Age : {contact.dob.age}</p>
                <p>Gender : {contact.gender}</p>
                <p>Contat No : {contact.cell}, {contact.phone}</p>
                <p>Country : {contact.location.country}</p>
            </>
            
        )
    }
    return(
        <div className='card'>
            <div className='image'><img src={contact.picture.large} alt={contact.name.first}></img></div>
            <div className='details'>
                <p>Name : {contact.name.first+" "+contact.name.last}</p>
                <p>Email Id: {contact.email}</p>
                <button onClick={clickHandler} className='button green'>Click for more details</button>
                {
                   (displayStatus) === true ? getExtraInfos() : null
                }
                
            </div>
        </div>
    )
}

export default ContactCard;