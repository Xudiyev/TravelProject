import { Link } from 'react-router-dom'
import './_hamburger.scss'


export default function HamburgerMenu() {
    return (
        <div className='hamburgerMenuContent hidden' >
            <div className='hamburgerLinksContent' >
                <a href="">
                    <p><Link to='/destination?sort=asc' >Destinations</Link></p>
                </a>
                <hr className='horizont' />

                <a href="">
                    <p>Private trips</p>
                </a>
                <hr className='horizont' />
                <ul>
                    <li><Link to="/about" >About us</Link></li>
                    <hr className='horizont' />

                    <li><Link to='/faq'  >FAQ</Link></li>
                    <hr className='horizont' />

                    <li><Link to='/blog'  >Blog</Link></li>
                    <hr className='horizont' />

                    <li><Link to='/contactUs' >Contact us</Link></li>
                </ul>

            </div>

        </div>
    )
}