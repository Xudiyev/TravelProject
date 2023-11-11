import './Footer.css'
import logo from '../../assets/FooterImagerFolder/Logo.svg'


export default function Footer() {
  return <footer  >
    <div className="footerPage" >
      <div className="footerContainer">
        <div className="footerContent">
          <div className="logoContent">
            <div className='LogoWithDescription' >
              <a href=""><img src={logo} alt="" /></a>
              <p>Discover the world's wonders and let us be <br />
                your trusted guide to extraordinary destinations.</p>
            </div>
            <div className='CopyrightContent'>
              <p className='Copyright' >© Copyright 2023 Tourista Ltd. All Rights Reserved.</p>
            </div>
          </div>
          <div className="menu footerLinkContent">
            <h1>Menu</h1>
            <ul>
              <a href="">
                <li>Destinations</li>
              </a>
              <a href="">
                <li>Private trips</li>
              </a>
              <a href="">
                <li>Blog</li>
              </a>
              <a href="">
                <li>About us</li>
              </a>
            </ul>
          </div>
          <div className="support footerLinkContent">
          <h1>Support</h1>
            <ul>
              <a href="">
                <li>Contact us</li>
              </a>
              <a href="">
                <li>FAQ</li>
              </a>
              <a href="">
                <li>Privacy Policy</li>
              </a>
              <a href="">
                <li>Terms of Use</li>
              </a>
            </ul>
          </div>
          <div className="followUs footerLinkContent">
          <h1>Follow us</h1>
            <ul>
              <a href="">
                <li>Instagram</li>
              </a>
              <a href="">
                <li>Facebook</li>
              </a>
              <a href="">
                <li>Linkedin</li>
              </a>
              <a href="">
                <li>Tiktok</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
}