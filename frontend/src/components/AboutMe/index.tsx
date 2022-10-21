
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

                    <p>
                        Minha jornada profissional começou em 2010, quando obtive a oportunidade de
                        entrar em uma empresa no ramo de construção civil, como servente de campo no setor de topografia e
                        posteriormente no suprimentos, como almoxarife. Com o tempo, surgiu uma oportunidade de
                        trabalhar como comprador, foi quando eu ingressei nessa área e trabalhei em diversas obras pelo Brasil.
                        Atualmente estou trabalhando nessa função, em uma empresa que atua no segmento de saneamento no ES.
                    </p>

                </div>
            </div>
        </div>

    )

}

export default AboutMe