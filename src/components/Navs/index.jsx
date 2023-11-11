import './nav.css'
import { Link } from 'react-router-dom'
export function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/about" >About us</Link></li>
                <li><Link to='/faq'  >FAQ</Link></li>
                <li><Link to='/blog'  >Blog</Link></li>
                <li><Link to ='/contactUs' >Contact us</Link></li>
            </ul>
        </nav>
    )
}