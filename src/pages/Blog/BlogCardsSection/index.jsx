import './_blogCards.scss'
import FoodDrinkImg from '../imagesBlog/Food&Dreank.png'
import SeeDoImf from '../imagesBlog/Spa.png'
import inspirationImg from '../imagesBlog/Inspiration.png'
import travelImg from '../imagesBlog/TravelTrips.png'
import drinkImg from '../imagesBlog/DrinkHawai.png'


export default function BlogCards() {
    return (
        <section>
            <div className='blogCardsContainer' >
                <div className='placeWithTwoCards' >
                    <div className='foodDrinkCard'  >
                        <img src={FoodDrinkImg} alt="" />
                        <div className='foodDrinkText' >
                            <div className='upperText' >
                                <h1>Food & Drink</h1>
                            </div>
                            <div className='lowerText' >
                                <p>Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…  </p>
                            </div>
                        </div>
                    </div>
                    <div className='seeDoCard'  >
                        <img src={SeeDoImf} alt="" />
                        <div className='seeDoText' >
                            <div className='upperText' >
                                <h1>See & Do</h1>
                            </div>
                            <div className='lowerText' >
                                <p>Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='placeWiththreeCards' >
                    <div className='inspirationCard cardPlace' >
                        <img src={inspirationImg} alt="" />
                        <div className='inspirationCardText threeCardTextContent' >
                            <div className='inspirationUpperText cardUpperText' >
                                <h2>Inspiration</h2>
                            </div>
                            <div className='insoirationLoweText cardLowerText' >
                                <p>Founded by Pope Julius II in the early 16th century and enlarged by successive pontiffs, the Vatican Museums boast one of the world's greatest art…</p>
                            </div>
                        </div>
                    </div>
                    <div className='travelCard cardPlace ' >
                    <img src={travelImg} alt="" />
                        <div className=' threeCardTextContent' >
                            <div className=' cardUpperText' >
                                <h2>Travel Tips</h2>
                            </div>
                            <div className=' cardLowerText' >
                                <p>Everyone wants to see the Colosseum, and it doesn’t disappoint, especially if accompanied by tales of armored gladiators and hungry lions. More...</p>
                            </div>
                        </div>
                    </div>
                    <div className='drinkCard cardPlace ' >
                    <img src={drinkImg} alt="" />
                        <div className=' threeCardTextContent' >
                            <div className=' cardUpperText' >
                                <h2>Food & Drink</h2>
                            </div>
                            <div className=' cardLowerText' >
                                <p>In the city of outstanding churches, none can hold a candle to St Peter's, Italy’s largest, richest and most spectacular basilica. Built atop a 4th…</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}