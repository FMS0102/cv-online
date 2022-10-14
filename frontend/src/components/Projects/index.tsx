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
                            <h2>Site de Votação de Jogos</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <div className="project-links">
                                <a href="/" className='button'>Link do Site</a>
                                <a href="/" className='git-button'><BsGithub /></a>
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
                            <h2>DS Delivery</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <div className="project-links">
                                <a href="/" className='button'>Link do Site</a>
                                <a href="/" className='git-button'><BsGithub /></a>
                            </div>
                        </div>
                    </div>

                    <div className="project-view">
                        <div className="view-content">
                            <div className="project-frame">
                                <iframe src="https://dsdeliver1.netlify.app" height="100%" width="100%"></iframe>
                            </div>
                        </div>
                        <div className="project-tools">

                        </div>
                    </div>
                </div>

                <div className="project-content">

                    <div className="project-info">
                        <div className="project-detail">
                            <h2>DS Movies</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <div className="project-links">
                                <a href="/" className='button'>Link do Site</a>
                                <a href="/" className='git-button'><BsGithub /></a>
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <div className="project-links">
                                <a href="/" className='button'>Link do Site</a>
                                <a href="/" className='git-button'><BsGithub /></a>
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