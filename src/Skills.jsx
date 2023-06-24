import './styles/skills.css'

function Skills(){
    return (
        <section id="skills" className="section-skills">
            <h5>Las habilidades que tengo</h5>
            <h2>Habilidades</h2>
            <div className='container-tecnologias'>
                <div className='hide animate__animated frontend'>
                    <h2>Front-End</h2>
                    <div className='frontend-items'>
                        <div className="item">
                            <img src="../public/assets/html.svg" alt="html" />
                            <h5>HTML</h5>
                        </div>
                        <div className="item">
                            <img src="../public/assets/css.png" alt="css" />
                            <h5>CSS</h5>
                        </div>
                        <div className="item">
                            <img src="../public/assets/js.svg" alt="js" />
                            <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                            <img src="../public/assets/react.svg" alt="react" />
                            <h5>React</h5>
                        </div>
                    </div>
                </div>
                <div className='hide animate__animated backend'>
                    <h2>Back-End</h2>
                    <div className='backend-items'>
                        <div className="item">
                            <img src="../public/assets/nodejs.svg" alt="nodejs" />
                            <h5>NodeJS</h5>
                        </div>
                        <div className="item">
                            <img src="../public/assets/spring.svg" alt="spring" />
                            <h5>SpringBoot</h5>
                        </div>
                        <div className="item">
                            <img src="../public/assets/mysql.svg" alt="mysql" />
                            <h5>MySQL</h5>
                        </div>
                        <div className="item">
                            <img src="../public/assets/git.svg" alt="git" />
                            <h5>Git</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills