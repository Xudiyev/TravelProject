import './OurLocalExperts.css'
import fullImage from './OurLocalExpertsImages/FullImage.png'
// import TravelMapIcon from './WhyUsImage/TravelMapIcon.svg'
// import BagsIcon from './WhyUsImage/BagsIcon.svg'
// import HumanIcon from './WhyUsImage/HumanIcon.svg'


export default function OurLocalExperts() {
    return (
        <section>
            <div className="ourLocalExpertsContainer">
                <div className="ourLocalExpertsContent">
                    <div className='ourLocalExpertsHeading'>
                        <h1>Our Local Experts</h1>
                    </div>
                    <div className='ourLocalExpertsImages'>
                        <img src={fullImage} alt="" />
                    </div>

                </div>
            </div>
        </section>)
}