import './_mailContactSection.scss'
export function MailContactSection() {
    return (
        <section>
            <div className="mailContactContainer">
                <div className="mailContactPlace">
                    <div className="commercialContact">
                        <h1>Commercial Contacts</h1>
                        <div className='contacts' >
                            <div className='advertise textFonts' >
                                <p>To advertise on Tourista:</p>
                                <a href="">advertise@tourista.com</a>
                            </div>
                            <div className='affiliate textFonts' >
                                <p>To become an affiliate partner:</p>
                                <a href="">affiliate@tourista.com</a>
                            </div>
                            <div className='hotels textFonts' >
                                <p>To contact the hotels team:</p>
                                <a href="">hotels@tourista.com</a>
                            </div>
                            <div className='touristaContact textFonts' >
                                <p>Send your request to republish Tourista content:</p>
                                <a href="">contentlicensing@tourista.com</a>
                            </div>
                            <div className='experienceTeam textFonts' >
                                <p>To contact the experiences team:</p>
                                <a href="">experiences@tourista.com</a>
                            </div>

                        </div>
                    </div>
                    <div className="contentContact">
                        <h1>Content Contact</h1>
                        <div className='report' >
                            <p> To report an issue to our content teams please contact: </p>
                            <a href="">corrections@tourista.com</a>
                        </div>
                        <h1>Press Contact </h1>
                        <div className='report' >
                            <p> If you’re a journalist / influencer with a press enquiry about Tourista, please contact our press office: </p>
                            <a href="">pr@tourista.com</a>
                        </div>

                        <h1> Partnership Contact</h1>
                        <div className='report' >
                            <p> For partnership opportunities: </p>
                            <a href="">partnerships@tourista.com</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}