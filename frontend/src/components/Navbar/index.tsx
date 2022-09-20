import { IconContext } from 'react-icons'
import { SiSentry } from 'react-icons/si'


function Navbar() {
    return (

        <>
            <nav className="container">
                <div className="logo-div">
                    <IconContext.Provider value={{ className: 'logo-icon' }}>
                        <a href="/"><SiSentry /></a>
                    </IconContext.Provider>
                </div>
            </nav>

            <div>
                <h1>Navbar</h1>
            </div>
        </>
    )
}
export default Navbar