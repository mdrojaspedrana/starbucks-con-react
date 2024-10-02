import React from 'react'

const Card = (props) => {
  return (
    <article className="cards__card">
        <img className="cards__card-img" src={props.img} alt="card-1"/>
        <div className="cards__card-container-text">
            <h2 className="cards__card-title">{props.title + ' '} <span>Starbucks</span></h2>
            <p className="cards__card-description">{props.description}</p>
            <input className="cards__card-btn" type="button" value={props.textContentBtn}/>
        </div>
        {props.estado ?  <div className="cards__card-circle" >{props.circle}</div> : null}
    </article>
  )
}

export default Card