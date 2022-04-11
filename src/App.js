import { useState, useEffect } from 'react';
import './css/style.css';
import Dice from "./components/Dice"
import { nanoid } from 'nanoid';


function App() {
  const [diceArray, setDiceArray] = useState(()=> randomDiceArray())

  function randomDiceArray(){
    const diceArray = []
    for(let i =0;i < 10; i++){
      const singleDice = Math.floor(Math.random() * 6) + 1
      const diceObject = {key:nanoid() ,value:singleDice, isHeld:false}
      diceArray.push(diceObject);
    }
    return diceArray
  }


function flipDice(id){
  setDiceArray(dices => dices.map(dice=> dice.key === id ? {...dice, isHeld:true} : dice) )
}

  const diceComponents = diceArray.map(dice=> <Dice isHeld={dice.isHeld} key={dice.key} id={dice.key}  value ={dice.value} flipDice={flipDice}  />)


  return (
<div class="container">
  <main>
                <div className="dice-container">
                   {diceComponents}
                </div>
                <button className='btn-roll' onClick={()=>{setDiceArray(()=>randomDiceArray())}}>Roll</button>
          </main>
</div>
  )
}

export default App;
