import './_europe.scss'
import Card from '../../../../components/Cards'
import { SaveIcon } from '../../../../components/Cards'
import IcelandImg from './EuropeImg/Iceland.png'
import ScotlandImg from './EuropeImg/Scotland.png'
import PortugalImg from './EuropeImg/Portugal.png'


export default function Europe() {
  return (
    <section>
      <div className="europeContainer">
        <div className="europeContent">
          <div className='europeHeading'>
            <h1>Europe</h1>
          </div>
          <div className='europeCards'>
            <Card
              saveIconOnImg = {<SaveIcon />}
              img={IcelandImg}
              title="ICELAND TRIP"
              description="Volcanic Iceland"
              day="7 days"
              price="$2299.00" />

            <Card
              saveIconOnImg = {<SaveIcon />}
              img={ScotlandImg}
              title="SCOTLAND TRIP"
              description="The Scottish Highlands"
              day="7 days"
              price="$1687.00" />

            <Card
              saveIconOnImg = {<SaveIcon />}
              img={PortugalImg}
              title="PORTUGAL TRIP"
              description="Atlantic Azores"
              day="6 days"
              price="$1220.00" />

          </div>

        </div>
      </div>
    </section>)
}