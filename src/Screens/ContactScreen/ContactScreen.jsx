import React, { useContext } from 'react'
import { ContactContext } from '../../Context/ContactContex'
import ContactList from '../../Component/ContactList/ContactList'

export default function ContactScreen() {
    const {contacts} = useContext(ContactContext)
    
    return (
        <div>
            <ContactList/>
        </div>
    )
}

