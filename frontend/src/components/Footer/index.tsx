import Img_panel from '../../images/footer_panel.svg'
import './styles.css'

function Footer() {

    return (
        <>
            <footer className="footer-bar">
                <div className="footer-content">
                    <div className="footer-img-content">
                        <div className="footer-panel">
                            <img src={Img_panel} alt=" " className='footer-img' />
                        </div>
                    </div>

                    <div className="footer-itens">
                        <div className="footer-details">

                          
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer