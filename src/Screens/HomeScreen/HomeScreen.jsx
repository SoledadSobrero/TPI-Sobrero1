import React from 'react'
import { Link } from "react-router"
import './HomeScreen.css'

export default function HomeScreen() {
    
    return (
      <div>
        <img class='wa-img' src='https://static.whatsapp.net/rsrc.php/v4/y6/r/wa669aeJeom.png' alt='whatsApp-img' />
        <h1 class='title'>Bienvenido al servicio de WhatsApp Web</h1>
        <Link class='link' to={"/contacts"}>
          <button class='button-start'>Usar en la web</button>
        </Link>
      </div>
    )
}
