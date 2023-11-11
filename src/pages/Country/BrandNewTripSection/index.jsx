import './_brandNewTripSection.scss'
import Vatican from './cardImg/Vatican.png'
import Colosseum from './cardImg/Colosseum.png'
import StPetersBasilica from './cardImg/StPetersBasilica.png'



export default function BrandNewTripSection() {
    return (
        <section>
            <div className="brandNewTripSectionContainer" >
                <div className="brandNewTripContent" >
                    <h1>Must-see attractions for your itinerary</h1>
                    <div className="brandNewTripContentCard">
                        <div className="firstCard cardContents">
                            <img src={Vatican} alt="" />
                            <div className='CardsTextContent' >
                                <div className="brandNewCardsUpperText">
                                    <h1>Vatican museums</h1>
                                </div>
                                <div className="brandNewCardsLowerText">
                                    <p>Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican…</p>
                                </div>

                            </div>
                        </div>

                        <div className="secondCard cardContents">
                            <img src={Colosseum} alt="" />
                            <div className='CardsTextContent' >
                                <div className="brandNewCardsUpperText">
                                    <h1>Colosseum</h1>
                                </div>
                                <div className="brandNewCardsLowerText">
                                    <p>Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by...</p>
                                </div>

                            </div>
                        </div>

                        <div className="theardCard cardContents">
                            <img src={StPetersBasilica} alt="" />
                            <div className='CardsTextContent' >
                                <div className="brandNewCardsUpperText">
                                    <h1>St Peter’s basilica </h1>
                                </div>
                                <div className="brandNewCardsLowerText">
                                    <p>In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and…</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}