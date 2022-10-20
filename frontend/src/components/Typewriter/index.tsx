import { useTypewriter } from 'react-simple-typewriter'
import './styles.css'

const TypeWriter = () => {

    const { text } = useTypewriter({
        words: [
            'Eu criei esse site com o objetivo de apresentar um portifólio, ' +
            'mostrando um pouco dos projetos que desenvolvi durante os meus estudos. ',

            'No desenvolvimento, foi utilizado o Typescript com o React, considerando a ' +
            'responsividade no CSS e algumas bibliotecas como o react-icons e react-simple-typewriter.'
        ],
        loop: 0,
        typeSpeed: 40,
        deleteSpeed: 30,
        delaySpeed: 4500
    })

    return (
        <div className='typerwriter-content'>
            <div className='text-details'>
                <h2 className='intro-title'>Introdução:</h2>
                <h2>
                    {text}
                </h2>
            </div>

            <div className='color-site'>
                <div className='color' style={{ background: 'var(--light-color)' }}>

                </div>
                <div className='color' style={{ background: 'var(--light-linear)' }}>

                </div>
                <div className='color' style={{ background: 'var(--primary-hover-color)' }}>

                </div>
                <div className='color' style={{ background: 'var(--primary-color)' }}>

                </div>
                <div className='color' style={{ background: 'var(--dark-color)' }}>

                </div>
            </div>
        </div>


    )

}

export default TypeWriter