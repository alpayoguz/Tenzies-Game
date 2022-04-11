import { useState, useEffect } from 'react';
import './css/style.css';
import Dice from "./components/Dice"


function App() {
  const [diceArray, setDiceArray] = useState(()=> randomDiceArray())

  function randomDiceArray(){
    const diceArray = []
    for(let i =0;i < 10; i++){
      const singleDice = Math.floor(Math.random() * 6) + 1
      const diceObject = {value:singleDice, isHeld:false}
      diceArray.push(diceObject);
    }
    return diceArray
  }



  const diceComponents = diceArray.map(dice=> <Dice value ={dice.value}/>)

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
