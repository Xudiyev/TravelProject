import './_logIn.scss'
// import imgAirplane from './LogInImages/LeftSideImage.png'
import logo from '../../../assets/HeaderImageFolder/Logo.svg'
import hideIcon from '../Images/hideIcon.svg'
import { Link } from 'react-router-dom'
import googleIcon from '../Images/GoogleIcon.svg'
import appleIcon from '../Images/AppleIcon.svg'
import facebookIcon from '../Images/FacebookIcon.svg'



export default function LogIn() {
    return (
        <div className="logInPageContent" >
            <div className="leftsideWithImage">
                {/* <img src={imgAirplane} alt="" /> */}
            </div>
            <div className="rightSideWIthLogInContent">
                <div className='rightSideLogo' >
                    <Link to="/" >
                        <img src={logo} alt="" />

                    </Link>
                </div>

                <div className='rightSideEmailAndPasswordContent' >
                    <div className="rightSideLogInPLace">
                        <h1>Sign in for your exciting journey</h1>
                        <form action="">
                            <div className="inputsLinksFullContent">
                                <div className='emailInputContent' >
                                    <label htmlFor="Email">Email</label>
                                    <input className='emailInpt' id='Email' type="email" placeholder='someone@example.com' />
                                </div>
                                <div className='passwordContent' >
                                    <label htmlFor="Password">Password</label>
                                    <div className='inptIconContent' >
                                        <input className=' ' id='Password' type="password" placeholder='•••••••••••' />
                                        <img src={hideIcon} alt="" />
                                    </div>
                                </div>
                                <div className='forgetPasswordLink' >
                                    <Link to="/passwordChange" ><p>Forgot password?</p></Link>
                                </div>
                            </div>
                            <button className='signInbutton' >Sign in</button>

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

                <div className='createAccount' >
                    <p>Don’t have an account?</p>
                    <span><Link to='/signIn' > Create one for new adventure!</Link></span>

                </div>


            </div>

        </div>
    )
}