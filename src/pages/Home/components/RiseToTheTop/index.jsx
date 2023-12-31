import './_riseToTheTop.scss'
import upToIcon from './UpToImages/upTo.svg'
import { Link } from 'react-router-dom'



export default function RiseToTheTop() {
 
    return (
        <section className='riseToTheTopSection' >
            <div className="riseToTheTopContainer">
                <div className="riseToTheTopContent">
                    <Link to=''>
                        <img 
                        onClick={() => {
                            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                          }}
                        src={upToIcon} alt="" />
                    </Link>
                    
                </div>
            </div>
        </section>)
}

