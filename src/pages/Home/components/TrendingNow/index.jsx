
import './TrendingNow.css'
import Card from '../../../../components/Cards'
import { BlueBtn } from '../../../../components/Cards'
import { SaveIcon } from '../../../../components/Cards'
import SpainImage from './TNImages/Spain.png'
import ItalyImage from './TNImages/Italy.png'
import TurkeyImage from './TNImages/Turkey.png'
import heartIcon from '../../../../components/Cards/CardImage/heartIcon.png'
import sparklesIcon from '../../../../components/Cards/CardImage/sparklesIcon.png'

export default function TrendingNow() {
  return (
    <section>
      <div className="trendingNowContainer">
        <div className="trendingNowContent">
          <div className='tNCHeading'>
            <h1>Trending now</h1>
          </div>
          <div className='tNCards'>
            <Card
              blueBtnText={<BlueBtn
                blueButtonWithIconAndTitle={sparklesIcon}
                blueButtonTitle='Loved by over 40s'
              />}
              saveIconOnImg = {<SaveIcon />}
              img={SpainImage}
              title="SPAIN TRIP"
              description="Magical Madrid To Marrakech By Train"
              day="12 days"
              price="$1299.00" />

            <Card
              blueBtnText={<BlueBtn
                blueButtonWithIconAndTitle={heartIcon}
                blueButtonTitle='Loved by couples'
              />}
              saveIconOnImg = {<SaveIcon />}

              img={ItalyImage}
              
              title="ITALY TRIP"
              description="Spectacular Sicily"
              day="5 days"
              price="$250.00" />

            <Card
              saveIconOnImg = {<SaveIcon />}
              img={TurkeyImage}
              title="TURKEY TRIP"
              description="International Istanbul"
              day="7 days"
              price="$400.00"
            />


          </div>

        </div>
      </div>
    </section>)
}