import { useTypewriter } from 'react-simple-typewriter'
import './styles.css'

const TypeWriter = () => {

    const { text } = useTypewriter({
        words: [
            'Lorem Ipsum is simply dummy text of the printing' + 
            'and typesetting industry. Lorem Ipsum has been the' + 
            'industrys standard dummy text ever since the 1500s,' + 
            'when an unknown printer took a galley of type and scrambled'
        ],
        loop: 2,
        typeSpeed: 50,
        deleteSpeed: 40
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