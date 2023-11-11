import './_reviewsSection.scss'
import  Icon  from '../../Destination/localExpertInPortugalSection/Image/HumanIcon.svg';
import Divider from '../../Destination/localExpertInPortugalSection/Image/Divider.svg'
import starIcon from './ReviewvsImage/StarIcon.svg'
import StarBlueIcon from './ReviewvsImage/StarBlueIcon.svg'

export default function ReviewsSection() {
    return (
        <section className='reviewsSection' >

            <div className="reviewSectionContainer">
                <div className="reviewSectionContent">
                    <div className='reviewTextContent' >
                        <div className='tiagoComent' >
                        <h2>We have a very good time all the way. The Capri boat ride is excellent and so much fun with the crew! They are awesome.</h2>
                        </div>

                    </div>
                    <div className='localExpertInfoContent' >
                        <div className='humanIcon' >
                             <img src={Icon} alt="" />
                        </div>
                        <div className="expertNameContent">
                            <p>Vivian Lim</p>
                            <div className='expertName' >
                                {/* STARTS */}
                                <div className='starsIcon' >
                                  <img src={StarBlueIcon} alt="" />
                                  <img src={StarBlueIcon} alt="" />
                                  <img src={StarBlueIcon} alt="" />
                                  <img src={StarBlueIcon} alt="" />
                                  <img src={starIcon} alt="" />
                                </div>
                                <img src={Divider} alt="" />
                                <h4>18 June 2024</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}