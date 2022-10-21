import { BsGithub, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import Img_panel from '../../images/lateral_panel.svg'
import './styles.css'
import Typewriter from '../Typewriter'


function Home() {
    return (

        <>
            <div id='bem-vindo' className="info-content">
                <div className="body-content">
                    <div className="lateral-panel">
                        <img src={Img_panel} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex-body-content">
                <div className="itens-details">
                    <div className="info-align">
                        <h2>Olá, eu sou</h2>
                        <h1 className='name-content'>FELIPE MOREIRA SIMÕES</h1>
                        <h2>DESENVOLVEDOR FULLSTACK</h2>

                        <a className="btn-div"
                            target="_blank"
                            href="https://drive.google.com/file/d/1x0skY7uN9ue4Q0oX6M74O7uDHWDCEdwa/view?usp=sharing"
                            rel="noreferrer">
                            <button className='btn-download' >DOWNLOAD CURRÍCULO</button>
                        </a>

                    </div>
                    <div className="icons">
                        <IconContext.Provider value={{ className: 'all-icons', size: '30px' }}>
                            <a
                                className="link-icons"
                                target='_blank'
                                href='https://github.com/FMS0102' rel='noreferrer'>
                                <BsGithub />
                            </a>
                            <a
                                className="link-icons"
                                target='_blank'
                                href='HTTPS://linkedin.com/in/felipe-m-simões-70465416b' rel='noreferrer'>
                                <BsLinkedin />
                            </a>
                            <a
                                className="link-icons"
                                target='_blank'
                                href="https://api.whatsapp.com/send?1=pt_BR&phone=5527997011639&text=Ol%C3%A1,%20fui%20redirecionado%20pelo%20link%20do%20curr%C3%ADculo%20online." rel='noreferrer'>
                                <BsWhatsapp />
                            </a>
                        </IconContext.Provider>
                    </div>
                </div>
                <Typewriter />
            </div>
        </>
    )

}

export default Home