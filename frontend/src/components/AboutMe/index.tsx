
import perfil_pic from './../../images/perfil.png'
import './styles.css'

function AboutMe() {

    return (

        <div id="sobre-mim" className="content">
            <div className="title">
                <h1>Sobre mim</h1>
            </div>

            <div className="about">

            </div>

            <div className="about-items">
                <div className="avatar-img">
                    <img src={perfil_pic} alt="" />
                </div>
                <div className="details">
                    <p>
                        Sou programador iniciante e comecei os meus estudos há quatro anos,
                        atualmente eu estou cursando análise e desenvolvimento de sistemas e pretendo
                        ingressar no mercado de TI.
                    </p>

                </div>
            </div>
        </div>

    )

}

export default AboutMe