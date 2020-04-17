import React, {useState} from 'react'
import axios from 'axios'

const FormContact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onNameChange = event => {
        setName(event.target.value)
      }
    
      const onEmailChange = event => {
        setEmail(event.target.value)
      }
    
      const onMessageChange = event => {
        setMessage(event.target.value)
      }
    
    const handleSubmit = event => {
        const body = {
            name,
            email,
            message
        }

        event.preventDefault();

        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data:  body
          }).then((response)=>{
            if (response.data.status === 'success'){
              alert("Message Sent."); 
              this.resetForm()
            }else if(response.data.status === 'fail'){
              alert("Message failed to send.")
            }
          })
    }
    

    return(
        <form id="contact-form" onSubmit={handleSubmit.bind(this)} method="POST">
            <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input type="text" className="form-control" value={name} onChange={onNameChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea className="form-control" rows="5" value={message} onChange={onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary button">Enviar</button>
        </form>
    )
}

export default FormContact