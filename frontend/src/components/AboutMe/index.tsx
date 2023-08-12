
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
                        Olá, seja bem-vindo!
                    </p>

                    <p>
                        Sou um entusiasta da programação, embarcando em uma empolgante jornada.
                        Com dedicação e curiosidade, venho explorando as nuances da tecnologia.

                    </p>

                    <p>
                        Passei mais de uma década trabalhando com suprimentos, almoxarifado e compras.
                        Isso me ensinou a ser eficiente e garantir que tudo saia nos conformes.
                        Também adquiri uma visão estratégica ao lidar com diversos aspectos do processo.

                        Estou trilhando meu caminho na área de Análise e Desenvolvimento de Sistemas, buscando aprimorar minhas
                        habilidades e me preparar para o mercado de TI.
                    </p>

                </div>
            </div>
        </div>

    )

}

export default AboutMe