import React from "react";
import Die from '../components/die'
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(function(){
        const allHeld= dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSame = dice.every(die =>die.value ===firstValue )
        if (allHeld && allSame){
            setTenzies(true)
            console.log("You Won!")
        }
    }, [dice])

    function generateNewDie(){
        return({
            value: Math.ceil(Math.random() *6), 
            isHeld:false,
            id: nanoid() 
        })
    }

    function allNewDice(){
        const newDice =[]
        for(let i =0; i<10; i++){
            newDice.push(generateNewDie())           
        }
        return newDice
    }
    
    function rollDice(){
        if(!tenzies){
        setDice(oldDice => oldDice.map(die =>{
            return die.isHeld ? die : 
            generateNewDie()
        }))
    } else {
        setTenzies(false)
        setDice(allNewDice())
    }
    }

    const diceElements = dice.map(die => <Die 
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld}
        holdDice ={()=> holdDice(die.id)}/>)

    function holdDice(id){
       setDice(oldDice => oldDice.map(die =>{
        return die.id===id ? {...die, isHeld: !die.isHeld}: die
       }
       ))
    }

    return (
        <main>
            {tenzies && <Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
                <img src="https://cdn-icons-png.flaticon.com/512/8336/8336948.png" />

            </div>
            <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
        
    )
}