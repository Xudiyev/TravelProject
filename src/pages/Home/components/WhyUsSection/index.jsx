import './WhyUs.css'
import TravelMapIcon from './WhyUsImage/TravelMapIcon.svg'
import BagsIcon from './WhyUsImage/BagsIcon.svg'
import HumanIcon from './WhyUsImage/HumanIcon.svg'


export default function WhyUs(props) {
    return (
        <section>
            <div className="whyUsContainer">
                <div className="whyUsContent">
                    <div className='whyUsHeading'>
                        <h1>{props.heading}</h1>
                    </div>
                    <div className='whyUsCards'>
                        <div className='whyUscardBody' >
                            <img src={TravelMapIcon} alt="" /> 
                            <p>More than 149 travel titles currently in print   </p>
                        </div>
                        <div className='whyUscardBody' >
                            <img src={BagsIcon} alt="" /> 
                            <p>Supporting millions of travellers since 1982</p>
                        </div>
                        <div className='whyUscardBody' >
                            <img src={HumanIcon} alt="" /> 
                            <p>Our utstanding customer satisfaction</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>)
}