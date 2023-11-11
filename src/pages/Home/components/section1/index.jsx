import homegif from '../section1/section1images/Homepage.gif'
import searchIcon from '../section1/section1images/SearchIcon.svg'
import './Section1.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />


export default function Section1() {
   return (
      <section>
         <div className="introduction">
            <div className="introductionContainer" >
               <div className="introductionContent" >
                  <img src={homegif} alt="" />
                  <div className='introductionTextContenttWithInput' >
                     <div className='text'>
                        <h1>We create trips you love</h1>
                        <p>Trips you couldn't plan, even if you wanted to.</p>
                     </div>
                     <div className='inputContentBody'>
                     <div className='inputContentPlace' >
                        <div className='inputContent' >
                           <div className='input' >
                              <input type="text" placeholder='Where do you want to go?' />
                           </div>
                           <div className='searchIcon'>
                              <img src={searchIcon} alt="" />
                           </div>

                        </div>
                     </div>
                     </div>
                     
                  </div>
               </div>
            </div>
         </div>
      </section>)
}