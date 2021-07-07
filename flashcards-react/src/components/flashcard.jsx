import React, {useEffect, useState} from 'react';
/* eslint-disable no-unused-expressions */
function Flashcard(props) {

    const [cardNumber, setCardNumber] = useState(0);
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
                    <h4>{props.flashcards[cardNumber].card_number}/{props.flashcards.length}</h4>
                </div>
                <div>
                    <button onClick={() => goToNextCard()}>Next Card</button>
                </div>
            </div>
        );
    }
}
export default Flashcard;