import './_lookingTGE.scss'
import RightIcon from './LookingTGEImages/Chevron_Right.svg'



export default function LookingToGoElseWhere() {
  return (
    <section className='lookingToGoElseWhereSection' >
      <div className="lookingToGoContainer">
        <div className="lookingToGoContent">
          <div className='text'>
            <h1>Looking to go elsewhere?</h1>
          </div>
          <div className='buttonContent'>
            <a href="">
                <button  >Our destinations <img src={RightIcon} alt="" /></button>
            </a>
          </div>
        </div>
      </div>
    </section>)
}