import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './styles/footer.css'

function Footer(){
    return(
        <footer id="footer" className="section-footer">
            <div><a href="https://www.linkedin.com/in/daniel-tlanepantla-pantoja-b709aa1b1/" target="_blank"><FaLinkedin className="fa-header"/></a></div>
            <div><a href="https://github.com/Pantoja14022020/" target="_blank"><FaGithub className="fa-header"/></a></div>
        </footer>
    )
}

export default Footer;