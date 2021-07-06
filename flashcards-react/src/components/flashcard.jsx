import React from 'react';

function Flashcard(props) {
    let flashcards = props.flashcards.map(function(flashcard){
        return <div>
            <h2>{flashcard.word}</h2>
            <h2>{flashcard.definition}</h2>
            <h2>{flashcard.card_number}/{props.flashcards.length}</h2>
        </div>
    });
    return(
        <div>
            {flashcards}
            <div>

            </div>
            <div>

            </div>
            <div>
                
            </div>
        </div>
    );
}
export default Flashcard;