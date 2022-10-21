import { IconContext } from 'react-icons'
import { SiSentry } from 'react-icons/si'
import { Link } from 'react-scroll'
import './styles.css'

const navItems = document.querySelector('.nav-content Link')
console.log(navItems)

function Navbar() {

    return (

        <>
            <nav className="container">
                <div className="logo-div">
                    <IconContext.Provider value={{ className: 'logo-icon', size: '45px', color: '#2E43AF' }}>
                        <a href="/"><SiSentry /></a>
                    </IconContext.Provider>
                </div>

                <div className='nav-content'>
                    <Link to="bem-vindo" spy={true} smooth={true} offset={90} duration={1000}>Home</Link>
                    <Link to="sobre-mim" spy={true} smooth={true} offset={90} duration={1000}>Sobre mim</Link>
                    <Link to="projetos" spy={true} smooth={true} offset={90} duration={1000}>Projetos</Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar