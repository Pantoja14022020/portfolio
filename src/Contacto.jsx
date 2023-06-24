import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contacto.css'

function Contacto() {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleEnviarCorreo() {

    const notificacionCorreo = document.querySelector('.notificacion-correo');//Seleccionar el div que contiene el mensaje en caso de error

    if(fullname.length == 0 || email.length == 0 || message == 0){
      notificacionCorreo.innerHTML = "";
      notificacionCorreo.innerHTML = `<p>${"Todos los campos son obligatorios"}</p>`;
      notificacionCorreo.classList.remove('hide');
      notificacionCorreo.classList.add('error');

      setTimeout(()=>{
        notificacionCorreo.innerHTML = "";
        notificacionCorreo.classList.add('hide');
        notificacionCorreo.classList.remove('error');
      },3000);

      return;
    }

    const expresion =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(!expresion.test(email)){
      notificacionCorreo.innerHTML = "";
      notificacionCorreo.innerHTML = `<p>${"Correo inválido"}</p>`;
      notificacionCorreo.classList.remove('hide');
      notificacionCorreo.classList.add('error');

      setTimeout(()=>{
        notificacionCorreo.innerHTML = "";
        notificacionCorreo.classList.add('hide');
        notificacionCorreo.classList.remove('error');
      },3000);
      return;
    }

    const body = {
      fullname,
      email,
      message
    }

    emailjs.send('service_zq7ojr5', 'template_4u6361e', body, '0vY4lmFqROkhSYR2x')
      .then((result) => {
        notificacionCorreo.innerHTML = "";
        notificacionCorreo.innerHTML = `<p>${"Correo enviado"}</p>`;
        notificacionCorreo.classList.remove('hide');
        notificacionCorreo.classList.add('correct');
  
        setTimeout(()=>{
          notificacionCorreo.innerHTML = "";
          notificacionCorreo.classList.add('hide');
          notificacionCorreo.classList.remove('correct');
        },3000);
      }, (error) => {
        notificacionCorreo.innerHTML = "";
        notificacionCorreo.innerHTML = `<p>${"Error server"}</p>`;
        notificacionCorreo.classList.remove('hide');
        notificacionCorreo.classList.add('error');
  
        setTimeout(()=>{
          notificacionCorreo.innerHTML = "";
          notificacionCorreo.classList.add('hide');
          notificacionCorreo.classList.remove('error');
        },3000);
      });

    setFullname('');
    setEmail('');
    setMessage('');

    document.querySelector('#form-contact').reset(); 
  }

  return (
    <section id="contacto" className="section-contacto">
            <div className="notificacion-correo hide"></div>
            <h5>Contactame</h5>
            <h2>Contacto</h2>
            <form id='form-contact' action="#" className='form animate__animated'>
              <input onInput={e => setFullname(e.target.value)} type="text" name="nombreCompleto" id="fullname" placeholder='Nombre Completo'/>
              <input onInput={e => setEmail(e.target.value)} type='email' name='email' id='email' placeholder='Email' spellCheck="false"></input>
              <textarea onInput={e => setMessage(e.target.value)} name="message" id="message" placeholder='Mensaje' spellCheck="false"></textarea>
              <div>
                <input type="button" value="Enviar" onClick={handleEnviarCorreo}/>
              </div>
            </form>
    </section>
  )
}

export default Contacto;