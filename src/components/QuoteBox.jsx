import React, { useState } from 'react'
import img from '../assets/quoteIcon.png'
import imgBtn from '../assets/nextIcon.png'
import TextCard from './TextCard.jsx'
const QuoteBox = ({selectedQuote, selectedColor, onClick}) => {
 

    return (
        <div className='card' style={{color: selectedColor.btnBg, backgroundColor: selectedColor.card}}>
            <div className='imgSection'>
                <img src={img} alt="quote img"/>
            </div>
            <TextCard selectedQuote={selectedQuote}/>
            <div className='btnSection'>
                <button className='btn'onClick={onClick} style={{backgroundColor: selectedColor.btnBg}}>
                    <img src={imgBtn}></img>
                </button>
            </div>
        </div>
    )
}

export default QuoteBox
