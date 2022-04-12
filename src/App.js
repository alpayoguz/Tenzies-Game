import { useState, useEffect } from 'react';
import './css/style.css';
import Dice from "./components/Dice"
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';


function App() {
  const [diceArray, setDiceArray] = useState(()=> randomDiceArray())
  const [hasWon, setHasWon] = useState(false)


  useEffect(()=>{
    const reservedDice = diceArray[0].value
    const allDicesAreSame = diceArray.every(dice => dice.value === reservedDice )
    const allDicesIsHeld = diceArray.every(dice=> dice.isHeld)
    if(allDicesAreSame && allDicesIsHeld){
     setHasWon(true)
    }
  })

  function resetGame(){
    setHasWon(false)
    setDiceArray(randomDiceArray())
  }
  const diceComponents = diceArray.map(dice=> <Dice isHeld={dice.isHeld} key={dice.key} id={dice.key}  value ={dice.value} flipDice={flipDice}  />)

  
  function generateDice(){
    return {key:nanoid() ,value:Math.floor(Math.random()*6) + 1, isHeld:false}
  }



  function randomDiceArray(){
    const diceArray = []
    for(let i =0;i < 10; i++){
      const diceObject = generateDice();
      diceArray.push(diceObject);
    }
    return diceArray
  }

  function rollDice(){
    setDiceArray(dices=> dices.map(dice=>{
       return dice.isHeld ? dice : generateDice()
    }))

    hasWon && resetGame()
  }


function flipDice(id){
  setDiceArray(dices => dices.map(dice=> dice.key === id ? {...dice, isHeld:true} : dice) )
}



 


  return (
<div class="container">
  <main>
                <div className="dice-container">
                   {diceComponents}
                </div>
                <button className='btn-roll' onClick={()=>{rollDice()}}>{hasWon ? "Next Game" : "Roll"}</button>
                <div className='confetti'>
                   {hasWon && <Confetti width={1000} height={400} confettiSource={{x:3, y:0, h:0, w:100}}/>}
                </div>
               
          </main>
</div>
  )
}

export default App;
