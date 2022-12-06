//style
import './Home.scss'

//assets
import chocolateImg from '../../../img/header/animationChocolate.png'

export default function () {
    return(
        <div className='home'>
            <div className='chocolateDown'>
                <img src={chocolateImg}/>
            </div>

        </div>
    )
}