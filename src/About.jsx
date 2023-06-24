import './styles/about.css'
import { IoIosSchool } from "react-icons/io";
import { IoCodeOutline } from 'react-icons/io5'
import { IoLocationOutline } from 'react-icons/io5'
import Button from './Button';

function About(){
    return (
        <section id="about" className='section-about'>
            <h5>Conoceme</h5>
            <h2>Sobre mi</h2>
            <div className="container-about">
                <div className='profile-container hide animate__animated animate__fadeOutLeft'><div className="behind-figure"></div><figure><img src="/assets/foto.png" alt="profile" /></figure></div>
                <div className="details-about hide animate__animated animate__fadeOutRight">
                    <div className='icons-about'><span><IoIosSchool className='io-about'/></span><span><IoCodeOutline className='io-about'/></span></div>
                    <p> Estudiante de Ingenieria de Software con ganas de superarse y consolidarse profesionalmente en el campo laboral. Me 
                        caracterizo por ser autodidacta y proactivo. A lo largo de mi trayectoria
                        academica he colaborado en la realización de proyectos de desarrollo de software orientados a la
                        web utilizando JavaScript, HTML, CSS, PHP, APIs, NodeJs, Django y MySQL.  
                    </p>
                    <div>
                        <div><h5>Ubicación:<span> Ixmiquilpan, Hidalgo, México</span></h5></div>
                        <Button tipo="button-header" href="#contact" clase="header-button" titulo="Contactame"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;