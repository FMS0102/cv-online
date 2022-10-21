import {
    SiJava,
    SiReact,
    SiPython,
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
                        Java é a linguagem que eu tenho mais familiaridade, comecei estudando ela e lógica de programação através de cursos online,
                        vídeos no Youtube e pesquisas na internet.
                    </p>
                    <p>
                        Nos projetos desenvolvidos, aprendi um pouco dos conceitos de OOP, conexões com o banco de dados via Maven e JDBC, MVC, collections, Lambda e outros.
                        Nas plataformas JavaFX e JavaEE.
                    </p>
                </div>

                <div className="card cian">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#70D3EE' }}>
                        <div><SiReact /></div>
                    </IconContext.Provider>
                    <h2>React</h2>
                    <p>
                        Desenvolvimento de alguns projetos utilizando o React.
                        Venho praticando a sua utilização como ferramenta principal na criação frontend.
                    </p>
                    <p>
                        Nesses projetos, feitos em Javascript ou Typescript, aprendi um pouco do conceito de montagem baseado em componentes,
                        com projetos desenvolvidos no React e React Native.
                    </p>
                </div>

                <div className="card yellow">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#F19D01' }}>
                        <div><SiPython /></div>
                    </IconContext.Provider>
                    <h2>Python</h2>
                    <p>
                        Web scraping e automações com tarefas agendadas no Windows utilizando Python.
                    </p>
                    <p>
                        Devido a facilidade de execução, é a principal liguagem que eu utilizo na automação de tarefas rotineiras,
                        como por exemplo a extração de relatórios simulando clicks com o pyautogui, coletar informações da web com o selenium ou
                        criar um formulário web com Django.
                    </p>
                </div>

                <div className="card orange">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#EB3C03' }}>
                        <div><SiMicrosoftoffice /></div>
                    </IconContext.Provider>
                    <h2>Microsoft Office</h2>
                    <p>
                        Desenvolvimento de tarefas automatizadas, com as ferramentas do Power Platform e Office 365.
                    </p>
                    <p>
                        Experiência na criação de bots através do Power Virtual Agents, desenvolvimento de aplicativos no Powerapps,
                        fluxos automatizados no Power Automate com envio de notificações e operações de CRUD,
                        e criação de relatórios no Power BI.
                    </p>
                </div>

                <div className="card green">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#67AA3C' }}>
                        <div><SiSpring /></div>
                    </IconContext.Provider>
                    <h2>Spring Boot</h2>
                    <p>
                        API's na arquitetura REST com operações de CRUD, utilizando Java o Spring Boot.
                    </p>
                    <p>
                        Desenvolvimento de webservices com conexão de banco de dados SQL ou NoSQL, envio de protocolos HTTP, autenticação JWT,
                        leitura de modelo conceitual UML, consultas Query, utilização do padrão DTO e outros.
                    </p>
                </div>

                <div className="card blue">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#2F72BC' }}>
                        <div><SiTypescript /></div>
                    </IconContext.Provider>
                    <h2>Typescript</h2>
                    <p>
                        Me interessei por Javascript e Typescript há pouco tempo e desenvolvi alguns projetos utilizando essas linguagens.
                    </p>
                    <p>
                        A possibilidade de desenvolver um sistema fullstack, utilizando somente uma linguagem foi um dos principais motivos para o meu interesse.
                    </p>
                </div>



            </div>
        </>
    )
}

export default Card