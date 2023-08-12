import {
    //SiJava,
    SiReact,
    //SiPython,
    SiMicrosoftoffice,
    //   SiTypescript,
    SiSpring
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
                {/* <div className="card red">
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
                </div> */}

                <div className="card green">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#67AA3C' }}>
                        <div><SiSpring /></div>
                    </IconContext.Provider>
                    <h2>Spring Boot</h2>
                    <p>
                        Conhecimento na construção de API's na arquitetura REST com operações CRUD, utilizando Java e Spring Boot.
                    </p>
                    <p>
                        Meu conhecimento inclui o desenvolvimento de webservices com integração de bancos de dados SQL e NoSQL, implementação de protocolos HTTP, autenticação JWT,
                        interpretação de modelos conceituais UML, consultas Query otimizadas, e adoção do padrão DTO, entre outras práticas.
                    </p>
                </div>

                <div className="card cyan">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#70D3EE' }}>
                        <div><SiReact /></div>
                    </IconContext.Provider>
                    <h2>React</h2>
                    <p>
                        Paixão pelo mundo do React e pelo desenvolvimento de projetos pessoais.
                    </p>
                    <p>
                        Tenho explorado o React em meus estudos, onde criei projetos usando JavaScript e TypeScript.
                        Minhas experiências incluem a construção de componentes, gerenciamento de estado e navegação entre telas.
                        Estou animado para continuar utilizando essa biblioteca e contribuir em futuros projetos!
                    </p>
                </div>


                {/* <div className="card yellow">
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
                </div> */}

                <div className="card yellow">
                    <IconContext.Provider value={{ className: 'image', size: '50px', color: '#F19D01' }}>
                        <div><SiMicrosoftoffice /></div>
                    </IconContext.Provider>
                    <h2>Power Platform</h2>
                    <p>
                        Proficiência na utilização do Power Platform e Office 365.
                        Experiência em criação de bots PVA, desenvolvimento no PowerApps, automação com notificações e CRUD no Power Automate, além da consolidação de dados utilizando Power Query e Dataflow.
                    </p>
                    <p>
                        Domínio na criação de relatórios no Power BI utilizando essas ferramentas.
                        Resultados consistentes na otimização de processos e produtividade.
                    </p>
                </div>



                {/* <div className="card blue">
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
                </div> */}



            </div>
        </>
    )
}

export default Card