
import perfil_pic from './../../images/perfil.png'
import './styles.css'

function AboutMe() {

    return (

        <div className="content">
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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting.
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                </div>
            </div>
        </div>

    )

}

export default AboutMe