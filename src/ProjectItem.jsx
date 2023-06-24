import { FaGithub } from "react-icons/fa";
import './styles/projectItem.css'

function ProjectItem({img,titulo,descripcion,link,linkGithub}) {


    return (
            <div className='item-project'>
                <div className="github"><a href={linkGithub} target="_blank"><FaGithub className="fa-header"/></a></div>
                <div className="image-item-project">
                    <a href={link} target="_blank" ><img src={img} alt={titulo} /></a>
                </div>
                <div className='info-item'>
                    <h2>{titulo}</h2>
                    <p>{descripcion}</p>
                </div>
            </div>
    )
}

export default ProjectItem
