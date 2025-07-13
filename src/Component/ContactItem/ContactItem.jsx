import React from "react"

const ContactItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    return (
        <div>
            <img src={img} alt={'${name} image profile'} />
            <h3>{name}</h3>
            <div>
                {last_message.text}
            </div>
            <span>{unread_messages}</span>
            <span>Ultima conexión: {last_time_connected}</span>
            <hr/>
        </div>
    )
}

export default ContactItem