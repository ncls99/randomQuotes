import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import TextCard from './components/TextCard.jsx'
import Quotes from "./quotes.json";

function App() {

  const colors = [
    {
      card: "#87A2FB",
      btnBg: "#6F38C5"
    },

    {
      card: "#F675A8",
      btnBg: "#554994"
    },

    {
      card: "#EF5B0C",
      btnBg: "#003865"
    },

    {
      card: "#125B50",
      btnBg: "#F8B400"
    },

    {
      card: "#00A19D",
      btnBg: "#FFF8E5"
    }
  ]

  const [element, setQuote] = useState(getQuoteRandom(Quotes))
  const [color, setColor] = useState(getRandomColor(colors))

  function getQuoteRandom(quotes) {
    const randomNum = Math.random()
    const randomPosition = Math.floor(randomNum * quotes.length)
    const randomQuote = quotes[randomPosition]
    return randomQuote
  }


  function getRandomColor(array) {
    const randomNum = Math.random()
    const randomPosition = Math.floor(randomNum * array.length)
    const randomColor = array[randomPosition]

    return randomColor
  }

  const nextQuote = () => {
    const newRandomElement = getQuoteRandom(Quotes)
    setQuote(newRandomElement)
    const newRandomColor = getRandomColor(colors)
    setColor(newRandomColor)
  }

  return (
    <div className="App" style={{backgroundColor: color.btnBg}}>
      <QuoteBox onClick={nextQuote} selectedQuote={element} selectedColor={color}/>
    </div>
  )
}

export default App
