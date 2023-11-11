import './Header.css'
import logo from '../../assets/HeaderImageFolder/Logo.svg'
import selector from '../../assets/HeaderImageFolder/Unfold_More.svg'
import { Nav } from '../Navs'
import { Link } from 'react-router-dom'


export default function Header() {
  return <header className="headerContent">
    <div className="mainHeader" >
      <div className='mainHeaderContainer'>
        <div className='mainHeaderContent'>
          <div className='menuLinks'>
             <Nav/>
          </div>
          <div className='selectorButton'>
            <p>US$</p>
            <a href=""><img src={selector} alt="" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="secondaryHeader" >
      <div className='secondaryHeaderContainer'>
        <div className="secondaryHeaderContent">
          <div className="secondaryMenuLinks">
            <a href="">
            <p><Link to='/destination?sort=asc' >Destinations</Link></p>
            </a>
            <a href="">
            <p>Private trips</p>
            </a>
          </div>
          <div className="headerLogo">
            <Link to="/" ><img src={logo} alt="" /></Link>
          </div>
          <div className="buttons">
              <Link>
              <button className='feelingLuckyButton'>I'm Feeling Lucky</button>
              </Link>
              <Link to='/logIn' >
              <button type='submit' className='loginButton' >Login</button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
}