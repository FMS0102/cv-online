import { BsGithub, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import Img_panel from '../../images/lateral_panel.svg'
import './styles.css'


function Home() {
    return (

        <>
            <div className="info-content">
                <div className="body-content">
                    <div className="lateral-panel">
                        <img src={Img_panel} alt="triangle_image" />
                    </div>
                </div>
            </div>

            <div className="flex-body-content">
                <div className="itens-details">
                    <div className="info-align">
                        <h2>Olá, meu nome é</h2>
                        <h1 className='name-content'>FELIPE MOREIRA SIMOES</h1>
                        <h2>DESENVOLVEDOR FULLSTACK</h2>
                        <div className="btn-div">
                            <button className='btn-download'>Download Currículo</button>
                        </div>
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
                                href='https://github.com/FMS0102' rel='noreferrer'>
                                <BsLinkedin />
                            </a>
                            <a
                                className="link-icons"
                                target='_blank'
                                href='https://github.com/FMS0102' rel='noreferrer'>
                                <BsWhatsapp />
                            </a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home