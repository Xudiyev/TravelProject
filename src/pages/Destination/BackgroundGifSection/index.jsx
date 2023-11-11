import destinationGif from './image/Destinations.gif'
import './_backgroundGifSection.scss'


export default function BackgroundGifSection() {
   return (
      <section>
         <div className="introduction">
            <div className="introductionContainer" >
               <div className="introductionContent" >
                  <img src={destinationGif} alt="" />
                  <div className='introductionTextContenttWithText' >
                     <div className='text'>
                        <h1>Explore places on Tourista</h1>
                        <p>Destinations</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>)
}