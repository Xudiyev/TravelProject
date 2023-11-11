import './_introduction.scss'

export default function Introduction (props) {
    return ( 
    <section>
      <div className="imageContent" >
        <div className="imageContentContainer">
            <img src={props.img} alt="" />
             <div className="contentText">
                  <h1  >{props.title}</h1>
                  <p>{props.description}</p>
             </div>
        </div>
      </div>
    </section>)
  }