import './Cards.css'
import saveIcon from './CardImage/SaveIcon.svg'


export default function Card(props) {
    return (
        <div className="cardBody">
            <div className="cardImage">
                <img src={props.img} alt="" />
                {/* blue btn on image i send like props START */}
                {props.blueBtnText}
                {/* blue btn on image i send like props End */}
                {props.saveIconOnImg}

            </div>
            <div className="cardText">
                <div className="cardTitleUpperText" >
                    <h4 className="title" >{props.title}</h4>
                    <h1 className="description" >{props.description}</h1>
                </div>
                <div className="cardTitleBottomText" >
                    <div className="dayContent" >
                        <p className="cardDay" >{props.day}</p>
                    </div>
                    <div className="priceContent">
                        <p className='cardFrom' > {props.start}  From</p>
                        <p className="cardPrice" >{props.price}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export function BlueBtn(props) {
    return (
        <div className='cardBlueButton'>
            <button className='blueButton'>
                <img src={props.blueButtonWithIconAndTitle} alt="" />
                <p>{props.blueButtonTitle}</p>
            </button>

        </div>
    )
}

export function SaveIcon(props) {
    return (
        <div className='cardSaveIcon'>
            <img src={saveIcon} alt="" />
        </div>
    )
}