import './_passwordChangePage.scss'
// import imgAirplane from '../Images/LeftSideImage.png'
import logo from '../../../assets/HeaderImageFolder/Logo.svg'
import IconLeft from '../Images/IconLeft.svg'
import { Link } from 'react-router-dom'




export default function PasswordChangePage() {
    return (
        <div className="passwordChangeContent" >
            <div className="passwordCHangeleftsideWithImage">
                {/* <img src={imgAirplane} alt="" /> */}
            </div>
            <div className="rightSideWIthPasswordChangeContent">
                <div className='touristaLogo' >
                    <Link to="/logIn" >
                    <img src={IconLeft} alt="" />
                    </Link>
                    <Link to="/" >
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className='passwordChangeContentPlace' >
                    <div className='changePasswordWIthEmail' >
                        <div className='textInformation' >
                            <h1>Looking to change your password?</h1>
                            <p>Enter your email below and we'll send you instructions on how to reset your password.</p>
                        </div>
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


            </div>

        </div>
    )
}