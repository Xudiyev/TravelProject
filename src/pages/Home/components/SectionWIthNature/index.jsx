import './_swn.scss'
import  Icon  from './SWNImages/HumanIcon.svg';
import Divider from './SWNImages/Divider.svg'
export default function SectionWithNature() {
    return (
        <section className='sectionWithNature' >

            <div className="sectionWithNatureContainer">
                <div className="sectionWithNatureContent">
                    <div className='reviewTextContent' >
                        <div className='tiagoComent' >
                        <h2>“Tiago put together an epic itinerary for me
                            and my friends. He showed us some hidden
                            hiking trails and amazing local food spots.
                            He even met us for a coffee to make sure we
                            had everything we needed.</h2>
                            <h1>Thanks Tiago!”</h1>
                        </div>
                        <div className='testimonialInfo' >
                            <p>Charlie, rappelling down a 370-foot waterfall</p>
                        </div>
                        <div className='regionName' >
                            <p>The Azores</p>
                        </div>

                    </div>
                    <div className='localExpertInfoContent' >
                        <div className='humanIcon' >
                             <img src={Icon} alt="" />
                        </div>
                        <div className="expertNameContent">
                            <p>Trip crafted by</p>
                            <div className='expertName' >
                                <p>Tiago</p>
                                <img src={Divider} alt="" />
                                <h4>Local expert in Portugal</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}