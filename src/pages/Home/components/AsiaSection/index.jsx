import './_asia.scss'
import Card from '../../../../components/Cards'
import { SaveIcon } from '../../../../components/Cards'
import ChinaImg from './AsiaImages/China.png'
import ThailandImg from './AsiaImages/Thailand.png'
import TaiwanImg from './AsiaImages/Taiwan.png'


export default function Asia() {
  return (
    <section>
      <div className="asiaContainer">
        <div className="asiaContent">
          <div className='asiaHeading'>
            <h1>Asia</h1>
          </div>
          <div className='asiaCards'>
            <Card
              saveIconOnImg = {<SaveIcon />}
              img={ChinaImg}
              title="CHINA TRIP"
              description="Icons Of China"
              day="5 days"
              price="$1399.00" />

            <Card
              saveIconOnImg = {<SaveIcon />}
              img={ThailandImg}
              title="THAILAND TRIP"
              description="Cambodia & Vietnam"
              day="7 days"
              price="$2350.00" />

            <Card
              saveIconOnImg = {<SaveIcon />}
              img={TaiwanImg}
              title="TAIWAN TRIP"
              description="A Taste Of Taiwan"
              day="7 days"
              price="$1900.00" />

          </div>

        </div>
      </div>
    </section>)
}