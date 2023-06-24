import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from "./Button";
import './styles/header.css'
import 'animate.css'

function Header(){

    return(
        <header id="header">
            <div className="content-header animate__animated animate__fadeInLeft">
                <aside>
                    <ul>
                        <li><a href="#" target="_blank"><FaLinkedin className="fa-header"/></a></li>
                        <li><a href="#" target="_blank"><FaGithub className="fa-header"/></a></li>
                    </ul>
                </aside>
                <div className="introduce">
                    <h5>Hola soy</h5>
                    <h1>Daniel Tlanepantla Pantoja</h1>
                    <h5>Desarrollador Full-Stack</h5>
                </div>
            </div>
            <div className="buttons-header animate__animated animate__fadeInRight">
                <Button tipo="download" href="../public/assets/CV.pdf" clase="secondary-button" titulo="Descargar CV"/>
                <Button tipo="button-header" href="#contact" clase="header-button" titulo="Contactame"/>
            </div>
        </header>
    )
}

export default Header;