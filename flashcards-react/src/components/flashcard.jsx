import React, {useState} from 'react';
import {Link} from 'react-router-dom';
/* eslint-disable no-unused-expressions */
function Flashcard(props) {

    const [cardNumber, setCardNumber] = useState(0);
    const [flashcards, setFlashcards] = useState(props.flashcards);
    console.log(props)
    if(props.flashcards.length === 0){
        return(
            <div>

            </div>
        )
    }
    else{
        function goToNextCard() {
            let tempCardNumber = cardNumber;
            tempCardNumber++;
            if(tempCardNumber === props.flashcards.length){
            tempCardNumber = 0;
            }
            setCardNumber(tempCardNumber);
        }

        function goToPreviousCard(){
            let tempCardNumber = cardNumber;
            tempCardNumber--;
            if(tempCardNumber < 0)
            tempCardNumber = props.flashcards.length -1;
            setCardNumber(tempCardNumber);
            console.log(tempCardNumber)
        }

        return(
            <div>
                <div>
                <button onClick={() => goToPreviousCard()}>Previous Card</button>
                </div>
                <div>
                    <h1>{props.flashcards[cardNumber].word}</h1>
                    <h2>{props.flashcards[cardNumber].definition}</h2>
                    <h4>{cardNumber + 1}/{props.flashcards.length}</h4>
                    <Link to={{pathname: '/edit', query:{flashcard:props.flashcards[cardNumber]}  }}><button>Edit</button></Link>
                </div>
                <div>
                    <button onClick={() => goToNextCard()}>Next Card</button>
                </div>
            </div>
        );
    }
}
export default Flashcard;