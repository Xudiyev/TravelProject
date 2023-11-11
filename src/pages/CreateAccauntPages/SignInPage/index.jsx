import './_signInPage.scss'
// import imgAirplane from '../Images/LeftSideImage.png'
import logo from '../../../assets/HeaderImageFolder/Logo.svg'
import IconLeft from '../Images/IconLeft.svg'
import { Link } from 'react-router-dom'
import googleIcon from '../Images/GoogleIcon.svg'
import appleIcon from '../Images/AppleIcon.svg'
import facebookIcon from '../Images/FacebookIcon.svg'




export default function SignInPage() {
    return (
        <div className="createAccountContent" >
            <div className="creatAccleftsideWithImage">
                {/* <img src={imgAirplane} alt="" /> */}
            </div>
            <div className="rightSideWIthCreateAccContent">
                <div className='touristaLogo' >
                    <Link to="/logIn" >
                        <img src={IconLeft} alt="" />
                    </Link>
                    <Link to="/" >
                        <img src={logo} alt="" />

                    </Link>
                </div>
                <div className='createAccountPlace' >
                    <div className='placeWhereCreateAcc' >
                        <h1>Create an account to start trip planning</h1>
                        <form action="">
                            <div className='emailInputInformation' >
                                <label htmlFor="Email">Email</label>
                                <input type="email" id='Email' placeholder='someone@example.com' />
                            </div>
                            <div className='resetBtn' >
                                <button type='submit' >Reset my password</button>
                            </div>
                        </form>
                    </div>

                </div>
                <div className="logInPlaceWithApp">
                    <div className='logInWithApp' >
                        <p>or use one of this</p>
                        <div className='applicationsContent' >
                            <Link  >
                                <button type='submit' >
                                    <img src={googleIcon} alt="" />
                                </button>
                            </Link>
                            <Link>
                                <button type='submit' >
                                    <img src={appleIcon} alt="" />
                                </button>
                            </Link>
                            <Link>
                                <button type='submit' >
                                    <img src={facebookIcon} alt="" />
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div className='recommendationPlace'>
                    <div className="recommedationContent">
                        <p>
                        By creating an account, you agree to elsewhere's <Link>Terms of Use</Link> and <Link>Privacy Policy</Link>.

                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}