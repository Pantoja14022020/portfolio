import {IoIosHome} from 'react-icons/io'
import {IoIosPerson} from 'react-icons/io'
import {IoIosBriefcase} from 'react-icons/io'
import {IoIosPhonePortrait} from 'react-icons/io'
import {IoIosCode} from 'react-icons/io'
import './styles/nav.css'

function Nav(){
    return (
        <nav>
            <ul>
                <li><a href="#header"><IoIosHome/></a></li>
                <li><a href="#about"><IoIosPerson/></a></li>
                <li><a href="#skills"><IoIosCode/></a></li>
                <li><a href="#projects"><IoIosBriefcase/></a></li>
                <li><a href="#contacto"><IoIosPhonePortrait/></a></li>
            </ul>
        </nav>
    )
}

export default Nav;