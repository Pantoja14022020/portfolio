import ProjectItem from './ProjectItem';
import './styles/projects.css'

function Projects(){
    return (
        <section id="projects" className="section-projects">
            <h5>Proyectos que he realizado</h5>
            <h2>Proyectos</h2>
            <div className="container-projects animate__animated">
                <ProjectItem img="../public/assets/nutryfoodpantry.png" titulo="NutryFoodPantry" descripcion="Sistema web para el control de productos perecederos #NodeJS" link="https://repository.uaeh.edu.mx/revistas/index.php/xikua/article/view/10006" linkGithub="https://github.com/Pantoja14022020/NutryFoodPantry"/>
                <ProjectItem img="../public/assets/payutick.png" titulo="PayUTick" descripcion="Sistema web para comprar tickets en un parque acuatico #PHP" link="https://ojs.southfloridapublishing.com/ojs/index.php/jdev/article/view/1997" linkGithub="https://github.com/Pantoja14022020/PayUTick"/>
                <ProjectItem img="../public/assets/travel.png" titulo="Agencia de Vuelos" descripcion="Pagina estatica sobre viajes sobre vuelos #HTML #JS #CSS" link="https://soft-sundae-c109d6.netlify.app/" linkGithub="https://github.com/Pantoja14022020/VuelosViajes"/>
                <ProjectItem img="../public/assets/predictor.png" titulo="Predictor" descripcion="Predictor de enfermedades cronicas #DataScience #Django #API" link="https://idyllic-caramel-d71470.netlify.app/" linkGithub="https://github.com/Pantoja14022020/predictorECFrontEnd"/>
            </div>
        </section>
    )
}

export default Projects;