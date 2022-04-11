import React from 'react'

function Dice(props) {
  return (
    <div onClick={()=>{props.flipDice(props.id)}} className={`dice-face ${props.isHeld && "green"}`}>
      <h2>{props.value}</h2>
    </div>
  )
}

export default Dice