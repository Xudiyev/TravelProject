import './_whyUsSixCards.scss'
import WhyUsCards from './whyUsCards'
import ToDoIcon from './whyUsCards/CardIcons/ToDoIcon.svg'
import BusIcon from './whyUsCards/CardIcons/BusIcon.svg'
import KidsIcon from './whyUsCards/CardIcons/KidsIcon.svg'
import LampIcon from './whyUsCards/CardIcons/LampIcon.svg'
import VisaIcon from './whyUsCards/CardIcons/VisaIcon.svg'
import MoneyIcon from './whyUsCards/CardIcons/MoneyIcon.svg'


export default function WhyUsWithSixCards(props) {
    return (
        <section>
            <div className="whyUsContainer">
                <div className="whyUsWithSixCardContent">
                    <div className='whyUsHeading'>
                        <h1>{props.heading}</h1>
                    </div>
                    <div className='whyUsCards'>
                        <WhyUsCards img={ToDoIcon}
                            heading='Best Things to Do'
                            description="Italy has so many delights to offer its visitors, it's hard to know where to start. Here's our pick of the best experiences Italy has to offer you." />

                        <WhyUsCards img={LampIcon}
                            heading='Things to Know'
                            description="With so many attractions, it's hard to know where to begin with a trip to Italy. Here's some local insight into the essential things to know before you go." />

                        <WhyUsCards img={BusIcon}
                            heading='Transportation'
                            description="Your guide to traveling independently across Italy, from the Alps to the islands." />

                    </div>
                    <div className='whyUsCards'>
                        <WhyUsCards img={VisaIcon}
                            heading='Visa Requirements'
                            description="Italy is one of the most visited countries in Europe and its many attractions are hard to resist. Find out if you need a visa before you go." />
                        <WhyUsCards img={MoneyIcon}
                            heading='Money and Costs'
                            description="These top budget tips can help you save money while exploring Italy." />
                        <WhyUsCards img={KidsIcon}
                            heading='Traveling with Kids'
                            description="Experience the best of Italy as a family with this guide to the top things to do there with kids." />
                    </div>

                </div>
            </div>
        </section>)
}