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
                            <h2>Site de Votação de Jogos</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                            <h2>DS Delivery</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                            <h2>DS Movies</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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