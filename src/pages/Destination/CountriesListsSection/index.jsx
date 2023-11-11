import { Link } from "react-router-dom";
import './_lists.scss'

export default function CountriesList(){
    return(
        <section>
            <div className="ListContainer">
                <div className="listPlace"  >
                    <div className="Europe partsOfTheWorld " >
                        <h1 className="partsOfTheWorldText" >Europe</h1>
                        <ul>
                            <li>Azores</li>
                            <li>Croatia</li>
                            <li>Georgia</li>
                            <li>Germany</li>
                            <li>Greece</li>
                            <li>Iceland</li>
                            <li>Ireland</li>
                            <li><Link to='/italy' >Italy</Link></li>
                            <li>Portugal</li>
                            <li>Scotland</li>
                            <li>Spain</li>
                            <li>United Kingdom</li>
                        </ul>
                    </div>
                    <div className="Asia partsOfTheWorld " >
                        <h1 className="partsOfTheWorldText" >Asia</h1>
                        <ul>
                            <li>Cambodia</li>
                            <li>China</li>
                            <li>India</li>
                            <li>Indonesia</li>
                            <li>Japan</li>
                            <li>Jordan</li>
                            <li>South Korea</li>
                            <li>Sri Lanka</li>
                            <li>Taiwan</li>
                            <li>Thailand</li>
                            <li>Turkey</li>
                            <li>Vietnam</li>
                        </ul>
                    </div>
                    <div className="Africa partsOfTheWorld " >
                        <h1 className="partsOfTheWorldText" >Africa</h1>
                        <ul>
                            <li>Egypt</li>
                            <li>Ethiopia</li>
                            <li>Kenya</li>
                            <li>Ghana</li>
                            <li>Madagascar</li>
                            <li>Mauritius</li>
                            <li>Morocco</li>
                            <li>Namibia</li>
                            <li>Rwanda</li>
                            <li>South Africa</li>
                            <li>Uganda</li>
                            <li>Tanzania & Zanzibar</li>
                        </ul>
                    </div>
                    <div className="C/America partsOfTheWorld " >
                        <h1 className="partsOfTheWorldText" >C/America</h1>
                        <ul>
                            <li>Belize</li>
                            <li>Costa Rica</li>
                            <li>Cuba</li>
                            <li>Dominican Republic</li>
                            <li>Guatemala</li>
                            <li>Honduras</li>
                            <li>Jamaica</li>
                            <li>Nicaragua</li>
                            <li>Mexico</li>
                            <li>Panama</li>
                            <li>Puerto Rico</li>
                            <li>Trinidad and Tobago</li>
                        </ul>
                    </div>
                    <div className="southAmerica  " >
                        <h1 className="partsOfTheWorldText" >S/America</h1>
                        <ul>
                            <li>Argentina</li>
                            <li>Bolivia</li>
                            <li>Brazil</li>
                            <li>Chile</li>
                            <li>Colombia</li>
                            <li>Ecuador</li>
                            <li>Peru</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}