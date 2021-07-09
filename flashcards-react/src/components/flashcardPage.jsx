import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {Link, withRouter} from 'react-router-dom';
import Flashcard from './flashcard';
import './flashcard.css'

function FlashcardPage(props) {

    const [flashcards, setFlashcards] = useState([]);
    
    useEffect(() => {
        getFlashcards(props.collectionId);
        console.log(props)
      },[]);

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
          <h2 className='title'>{props.title}</h2>
            <div>
            <Link to='/'>Collections</Link>
            </div>
            <Flashcard flashcards={flashcards}/>
            <div>
            {/* <Link to='/form' flashcards={flashcards}>Create</Link> */}
            <Link to={{pathname: '/form', query:{flashcards:flashcards}  }}>Create</Link>
            </div>
        </div>
    );

}
export default withRouter(FlashcardPage);