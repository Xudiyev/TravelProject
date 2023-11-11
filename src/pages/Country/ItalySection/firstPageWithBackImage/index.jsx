import './_firstpagewithbackimg.scss'
import italyImg from './firstPageImageFolder/ItalyFullImage.png'
import calendarImg from './firstPageImageFolder/fi-rr-calendar.svg'
import sunImg from './firstPageImageFolder/sun.svg'
import earthImg from './firstPageImageFolder/earth.svg'
import humanImg from './firstPageImageFolder/Human.svg'
import dollarImg from './firstPageImageFolder/dollar-sign.svg'


export default function FirstPageWithBackImg(){
    return(
        <section>
            <div className="firstPageContainer">
                <div className="imageContent">
                    <img src={italyImg} alt="" />
                    <div className="textheadingContent">
                        <div className="text">
                            <h1>Italy</h1>
                            <p>Trips you couldn't plan, even if you wanted to.</p>
                        </div>
                        <div className='btnContent' >
                          <button type='submit'>Create a trip</button>
                        </div>
                    </div>
                    <div className='statiscticsContent' >
                      <div className='calendarPage iconInfoContent ' >
                        <img src={calendarImg} alt="" />
                        <div className="calendarText iconInfoText">
                            <h1>BEST TIME TO VISIT</h1>
                            <div className='calendarDescription iconInfoDescription' >
                                <p>High s/ May-Sept</p>
                            </div>

                        </div>
                      </div>
                      <div className=' iconInfoContent' >
                        <img src={sunImg} alt="" />
                        <div className=" iconInfoText">
                            <h1>CLIMATE</h1>
                            <div className=' iconInfoDescription' >
                                <p>High 32°C</p>
                                <p>Low 0°C</p>
                            </div>

                        </div>
                      </div>
                      <div className=' iconInfoContent' >
                        <img src={earthImg} alt="" />
                        <div className=" iconInfoText">
                            <h1>TIMEZONE</h1>
                            <div className=' iconInfoDescription' >
                                <p>Central European</p>
                                <p>Time (UTC +1)</p>
                            </div>

                        </div>
                      </div>
                      <div className=' iconInfoContent' >
                        <img src={dollarImg} alt="" />
                        <div className=" iconInfoText">
                            <h1>CURRENCY</h1>
                            <div className=' iconInfoDescription' >
                                <p>Euro</p>
                                <p>Dollar</p>
                            </div>

                        </div>
                      </div>
                      <div className='humanIconCOntent iconInfoContent' >
                        <img src={humanImg} alt="" />
                        <div className=" iconInfoText">
                            <h1>LOCAL LANGUAGE</h1>
                            <div className=' iconInfoDescription' >
                                <p>Italian</p>
                                <p>English</p>
                            </div>

                        </div>
                      </div>

                    </div>
                  
                </div>
            </div>
        </section>
    )
}