import './_topDestination.scss'
import Card from '../../../components/Cards'
import ItalyImg from './images/Italy.png'
import PortugalImg from './images/Portugal.png'
import TurkeyImg from './images/Turkey.png'
import IcelandImg from './images/Iceland.png'
import CostaRicaImg from './images/CostaRica.png'
import ArgentinaImg from './images/Argentina.png'


export default function TopDestination(props) {
    return (
        <section>
            <div className='topDestinationContainer' >
                <h5>{props.heading}</h5>
                <div className="topDestinationCards">
                    <div className='firstLineCards'>
                    <Card img={ItalyImg}
                        title='ITALY TRIP'
                        description='International Italy'
                        day='34 available trip plans'
                        price='$199.00'
                        start='Starts' />

                    <Card img={PortugalImg}
                        title='PORTUGAL TRIP '
                        description='International Portugal'
                        day='54 available trip plans'
                        price='$250.00'
                        start='Starts' />

                    <Card img={TurkeyImg}
                        title='TURKIYE TRIP'
                        description='International Turkiye'
                        day='19 available trip plans'
                        price='$400.00'
                        start='Starts' />
                    </div>

                    <div className='secondLineCards'>

                    <Card img={IcelandImg}
                        title='ICELAND TRIP'
                        description='International Iceland'
                        day='105 available trip plans'
                        price='$299.00'
                        start='Starts' />

                    <Card img={CostaRicaImg}
                        title='COSTA RICA TRIP'
                        description='International Costa Rica'
                        day='23 available trip plans'
                        price='$250.00'
                        start='Starts' />

                    <Card img={ArgentinaImg}
                        title='ARGENTINA TRIP'
                        description='International Argentina'
                        day='87 available trip plans'
                        price='$400.00'
                        start='Starts' />
                    </div>
                 



                </div>
            </div>

        </section>
    )
}