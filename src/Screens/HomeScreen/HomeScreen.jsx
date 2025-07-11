import React from 'react'
import Chat from '../../Component/Chat/Chat'
import NewMessageForm from '../../Component/NewMessageform/NewMessageForm'
import Swal from 'sweetalert2'

export default function HomeScreen() {
    const handleClickAlertButton = () => {
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
    }

    return (
      <div>
        <button onClick={handleClickAlertButton}>Alerta bonita</button>
        <Chat />
        <NewMessageForm />
      </div>
    )
}
