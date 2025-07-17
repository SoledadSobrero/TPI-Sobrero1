import React from "react"
import { Link } from "react-router"
import './ContactItem.css'

const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    return (
        <div class='contact-item'>     
            <img class='contact-img' src={img} alt={'${name} image profile'} />
            <Link class='link' to={"/home"}>
                <h3 class='contact-name'>{name}</h3>
            </Link>
            <div>
                {last_message.text}
            </div>
            <span>{unread_messages}</span>
        </div>
    )
}

export default ContactItem