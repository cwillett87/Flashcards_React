import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom';
import Flashcard from './flashcard';

function FlashcardPage(props) {

    const [flashcards, setFlashcards] = useState([]);
    
    useEffect(() => {
        getFlashcards(props.collectionId);
        console.log(flashcards)
      },[props]);

    let getFlashcards = async (collectionId) => {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/collections-flashcard/${collectionId}/`);
            console.log(response.data)
            setFlashcards(response.data)
            
          }
          catch(err) {
            console.log(err);
          } 
      }

    return(
        <div>
            <div>
            <Link to='/'>Collections</Link>
            </div>
            <Flashcard flashcards={flashcards}/>
        </div>
    );
}
export default withRouter(FlashcardPage);