import './styles/button.css'

function Button({tipo,href,clase,titulo}) {
    if(tipo=="download") return (<a href={href} download className={clase}>{titulo}</a>)
    if(tipo=="button-header") return (<a href={href} className={clase}>{titulo}</a>)
}

export default Button;