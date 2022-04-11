import { useState, useEffect } from 'react';
import './css/style.css';
import Dice from "./components/Dice"


function App() {

  function randomDiceArray(){
    const diceArray = []
    for(let i =0;i < 10; i++){
      const singleDice = Math.floor(Math.random() * 6) + 1
      diceArray.push(singleDice);
    }
    return diceArray
  }

  const [diceArray, setDiceArray] = useState(()=> randomDiceArray())

  const diceComponents = diceArray.map(dice=> <Dice value ={dice}/>)

  return (
<div class="container">
  <main>
                <div className="dice-container">
                   {diceComponents}
                </div>
          </main>
</div>
  )
}

export default App;
