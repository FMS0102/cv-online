import {
    SiJava,
    SiReact,
    SiJavascript,
    SiMicrosoftoffice,
    SiSpring,
    SiTypescript
} from 'react-icons/si'
import { IconContext } from 'react-icons'
import './styles.css'

function Card() {
    return (
        <>
            <div className="text-title">
                <h1>
                    Principais tecnologias e ferramentas
                </h1>
            </div>

            <div className="grid-card">
                <div className="card red">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#EA2E31' }}>
                        <div><SiJava /></div>
                    </IconContext.Provider>
                    <h2>Java</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries, but also the
                        leap into electronic typesetting.
                    </p>
                </div>

                <div className="card cian">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#70D3EE' }}>
                        <div><SiReact /></div>
                    </IconContext.Provider>
                    <h2>React</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries, but also the
                        leap into electronic typesetting.
                    </p>
                </div>

                <div className="card yellow">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#EAD41C' }}>
                        <div><SiJavascript /></div>
                    </IconContext.Provider>
                    <h2>Javascript</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries, but also the
                        leap into electronic typesetting.
                    </p>
                </div>

                <div className="card orange">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#EB3C03' }}>
                        <div><SiMicrosoftoffice /></div>
                    </IconContext.Provider>
                    <h2>Microsoft Office</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries, but also the
                        leap into electronic typesetting.
                    </p>
                </div>

                <div className="card green">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#67AA3C' }}>
                        <div><SiSpring /></div>
                    </IconContext.Provider>
                    <h2>Spring</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries, but also the
                        leap into electronic typesetting.
                    </p>
                </div>

                <div className="card blue">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#2F72BC' }}>
                        <div><SiTypescript /></div>
                    </IconContext.Provider>
                    <h2>Typescript</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.It has survived not only five centuries, but also the
                        leap into electronic typesetting.
                    </p>
                </div>



            </div>
        </>
    )
}

export default Card