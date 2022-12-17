import React, { useState } from 'react';
import quotes from '../quotes.json'
const QuoteBox = () => {

    const random = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(random)

    const changePhrase = () => {
        const randomPhrase = Math.floor(Math.random() * quotes.length);
        setIndex(randomPhrase)
    }

    const colors = [ '#638FBF', '#717DB6', '#8269A4', '#90548B', '#97406B', '#35B8CE', '#2ACFC6', '#66E3AC', '#ACF18B', ]
    const randomColor = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColor]}`
    


    return (
        <div className='Pbox ' style={{ color: colors[randomColor] }}>
            <div className='box'>
                <p>{quotes[index].quote}</p>
                <h3>{quotes[index].author}</h3>
                <button style={{background: colors[randomColor]}} onClick={changePhrase}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    );
};

export default QuoteBox;