import './BrandNewTrips.css'
import Card from '../../../../components/Cards'
import { SaveIcon } from '../../../../components/Cards'
import SpainImage from './BNTImages/Spain.png'
import ItalyImage from './BNTImages/Italy.png'
import TurkeyImage from './BNTImages/Turkey.png'


export default function TrendingNow() {
  return (
    <section>
      <div className="brandNTContainer">
        <div className="brandNTContent">
          <div className='bNTHeading'>
            <h1>Brand new trips</h1>
          </div>
          <div className='brandNTCards'>
            <Card
              saveIconOnImg = {<SaveIcon />}
              img={SpainImage}
              title="SPAIN TRIP"
              description="Magical Madrid To Marrakech By Train"
              day="12 days"
              price="$1299.00" />

            <Card
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
              price="$400.00" />

          </div>

        </div>
      </div>
    </section>)
}