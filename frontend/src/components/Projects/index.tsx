/* eslint-disable jsx-a11y/iframe-has-title */
import { BsGithub } from 'react-icons/bs'
import './styles.css'

function Projects() {
    return (
        <div className="projects">
            <h1>Projetos</h1>
            <div className="project-list">
                <div className="project-content">

                    <div className="project-info">
                        <div className="project-detail">
                            <h2>Site de votação de jogos</h2>
                            <p>
                                Projeto desenvolvido utilizando Java no backend com Spring Boot, Typescript React e React Native.
                                O projeto consiste em um sistema de votação de jogos, onde os usuários escolhem os jogos e plataformas para votação e a contabilização
                                desses votos são apresentados em alguns gráficos via web.
                            </p>
                            <p>
                                Esse site foi armazenado no Netlify de forma gratuita, e sua atualização pode demorar alguns minutos para carregar as informações do backend.
                            </p>
                            <div className="project-links">
                                <a href="https://fms01.netlify.app" target="_blank" className='button' rel="noreferrer">Link do Site</a>
                                <a href="https://github.com/FMS0102/dspesquisa" target="_blank" className='git-button' rel="noreferrer"><BsGithub /></a>
                            </div>
                        </div>
                    </div>

                    <div className="project-view">
                        <div className="view-content">
                            <div className="project-frame">
                                <iframe src="https://fms01.netlify.app" height="100%" width="100%"></iframe>
                            </div>
                        </div>
                        <div className="project-tools">

                        </div>
                    </div>
                </div>

                <div className="project-content">

                    <div className="project-info">
                        <div className="project-detail">
                            <h2>Site com sistema delivery</h2>
                            <p>
                                Projeto desenvolvido utilizando Java no backend com Spring Boot, Typescript React e React Native.
                                O projeto consiste em um sistema delivery de solicitação de pedidos e entregas, onde os usuários selecionam os pratos desejados via web
                                e efetuam o pedido, apontando o endereço de entrega no mapa. Cada pedido gera uma solicitação que fica pendente, aguardando
                                ser finalizado, após entrega.
                            </p>
                            <p>
                                Esse site foi armazenado no Netlify de forma gratuita, e sua atualização pode demorar alguns minutos para carregar as informações do backend.
                            </p>
                            <div className="project-links">
                                <a href="https://dsdeliver1.netlify.app/" target="_blank" className='button' rel="noreferrer">Link do Site</a>
                                <a href="https://github.com/FMS0102/dsdeliver-sds2" target="_blank" className='git-button' rel="noreferrer"><BsGithub /></a>
                            </div>
                        </div>
                    </div>

                    <div className="project-view">
                        <div className="view-content">
                            <div className="project-frame">
                                <iframe src="https://dsdeliver1.netlify.app/orders" height="100%" width="100%"></iframe>
                            </div>
                        </div>
                        <div className="project-tools">

                        </div>
                    </div>
                </div>

                <div className="project-content">

                    <div className="project-info">
                        <div className="project-detail">
                            <h2>Site de votação de filmes</h2>
                            <p>
                                Projeto desenvolvido utilizando Java no backend com Spring Boot e Typescript React.
                                O projeto consiste em um sistema de votação de filmes, onde os usuários acessam o site com algumas opções de filmes para
                                votação, exibidos de forma paginada. Cada votação é contabilizada, gerando uma média de pontuação que é medida com o preenchimento
                                de estrelas de acordo com o valor.
                            </p>
                            <p>
                                Esse site foi armazenado no Netlify de forma gratuita, e sua atualização pode demorar alguns minutos para carregar as informações do backend.
                            </p>
                            <div className="project-links">
                                <a href="https://movies-ds.netlify.app" target="_blank" className='button' rel="noreferrer">Link do Site</a>
                                <a href="https://github.com/FMS0102/ds_movie" target="_blank" className='git-button' rel="noreferrer"><BsGithub /></a>
                            </div>
                        </div>
                    </div>

                    <div className="project-view">
                        <div className="view-content">
                            <div className="project-frame">
                                <iframe src="https://movies-ds.netlify.app" height="100%" width="100%"></iframe>
                            </div>
                        </div>
                        <div className="project-tools">

                        </div>
                    </div>
                </div>

                <div className="project-content">

                    <div className="project-info">
                        <div className="project-detail">
                            <h2>Site de Vendas</h2>
                            <p>
                                Projeto desenvolvido utilizando Java no backend com Spring Boot e Typescript React.
                                O projeto consiste em uma apresentação em web da contabilização de vendas com data, nome do vendedor e valor total,
                                em forma de tabela que utiliza um sistema de paginação e alguns gráficos. 
                            </p>
                            <p>
                                Esse site foi armazenado no Netlify de forma gratuita, e sua atualização pode demorar alguns minutos para carregar as informações do backend.
                            </p>
                            <div className="project-links">
                                <a href="https://dsvendas3.netlify.app" target="_blank" className='button' rel="noreferrer">Link do Site</a>
                                <a href="https://github.com/FMS0102/projeto-sds3" target="_blank" className='git-button' rel="noreferrer"><BsGithub /></a>
                            </div>
                        </div>
                    </div>

                    <div className="project-view">
                        <div className="view-content">
                            <div className="project-frame">
                                <iframe src="https://dsvendas3.netlify.app" height="100%" width="100%"></iframe>
                            </div>
                        </div>
                        <div className="project-tools">

                        </div>
                    </div>
                </div>



            </div>
        </div>
    )

}

export default Projects