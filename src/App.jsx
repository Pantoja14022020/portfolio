import Header from './Header'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contacto from './Contacto'
import Footer from './Footer'
import Nav from './Nav'
import './styles/index.css'
import './helpers/scroll-effect'

function App(){
    return (
        <>
            <Header/>
            <About/>
            <Skills/>
            <Projects/>
            <Contacto/>
            <Footer/>
            <Nav/>
        </>
    )
}

export default App