import React from 'react'

const TextCard = ({selectedQuote}) => {

    return (
        <div>
            <p>{selectedQuote.quote}</p>
            <h1>{selectedQuote.author}</h1>
        </div>
    )

}

export default TextCard