//style
import './Home.scss'

//assets
import chocolateImg from '../../../img/header/animationChocolate.png'
import { useEffect } from 'react'

export default function () {

    useEffect(() => {
      document.getElementById('chocolateDown').style.top = '-20px'
    }, [])
    

    return(
        <div className='home'>
            <div className='chocolateDown' id='chocolateDown'>
                <img src={chocolateImg}/>
            </div>

            <div className='s1'>

            </div>
            <div className='s2'>

            </div>
            <div className='s3'>

            </div>
            <div className='s4'>

            </div>
            <div className='s5'>
            
            </div>



            

        </div>
    )
}