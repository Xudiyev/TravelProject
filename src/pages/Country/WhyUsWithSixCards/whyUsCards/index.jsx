import './_whyUsCards.scss'

export default function WhyUsCards(props) {
    return (

        <div className='whyUscardBody' >
            <img src={props.img} alt="" />
            <div className='whyUsCardText' >
                <h1>{props.heading}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}