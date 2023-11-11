import { Link } from 'react-router-dom'
import './_joinUs.scss'



export default function JoinUs() {
    return (
        <section className='joinUsSection' >
            <div className="joinUsContainer">
                <div className="joinUsContent">
                    <div className='text'>
                        <h1>Join our travel revolution</h1>
                        <p>Sign up to stay in the know - hot new travel spots,<br />
                            how we strive to make the world a better place, and all sorts of surprises.</p>
                    </div>
                    <div className='joinUsInputContentPlace' >
                    <div className='joinUsInputContent'>
                            <input type="email" placeholder='Email' />
                            <Link  >
                            <button type='submit' >Sign up</button>
                            </Link>

                    </div>
                    </div>
               
                </div>
            </div>
        </section>)
}