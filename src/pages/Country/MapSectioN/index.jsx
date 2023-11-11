import './_mapSection.scss'
import leftIcon from './mapImg/chevron-left.svg'
import rightIcon from './mapImg/chevron-right.svg'
import cardImg from './mapImg/cardImg.png'



export default function MapSection() {
    return (
        <section className='mapSection' >
            <header>
                <div className="headerContent">
                    <div className="text">
                        <p>Tops things to do</p>
                    </div>
                    <div className="buttons">
                        <img src={leftIcon} alt="" />
                        <img src={rightIcon} alt="" />
                    </div>
                </div>
            </header>
            <div className="oneCardBody">
                <img src={cardImg} alt="" />
                <div className="mapSectionCardText">
                    <div className="heading">
                     <h1>Have the drive of your life on the cliff roads of the AAmalfi Coast</h1>
                    </div>
                </div>


            </div>
        </section>
    )
}