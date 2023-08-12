import { useTypewriter } from 'react-simple-typewriter'
import './styles.css'

const TypeWriter = () => {

    const { text } = useTypewriter({
        words: [
            'Montei este site para exibir meu portfólio e destacar alguns ' +
            'dos projetos que trabalhei enquanto estava estudando. ',

            'No processo de criação, combinei Typescript com React, ajustei a responsividade usando  ' +
            'CSS e adicionei um toque especial com bibliotecas como react-icons e react-simple-typewriter.'
        ],
        loop: 0,
        typeSpeed: 40,
        deleteSpeed: 30,
        delaySpeed: 8500
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