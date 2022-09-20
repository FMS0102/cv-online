import { IconContext } from 'react-icons'
import { SiSentry } from 'react-icons/si'
import { Link } from 'react-router-dom'
import './styles.css'


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
                    <Link to="/bem-vindo">Home</Link>
                    <Link to="/sobre-mim">Sobre mim</Link>
                    <Link to="/projetos">Projetos</Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar