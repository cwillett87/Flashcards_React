import React, { useState } from 'react';
import useForm from './useForm';
import axios from 'axios'

const CreateForm = (props) => {
    const {values, handleChange, handleSubmit} = useForm(createCard);
    const [flashcard, setFlashcard] = useState(props.flashcards.flashcards)
    console.log(props.collectionId)
        async function createCard() {
            const addCard = {...values, ['collection']: props.collectionId}
            try{
                let response = await axios.post(`http://127.0.0.1:8000/collections-flashcard/`, addCard);
                console.log(response.data)
                setFlashcard(response.data)
                
              }
              catch(err) {
                console.log(err);
              } 
        }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Word:
                    <input
                        type='text'
                        name='word'
                        onChange={handleChange}
                        value={values.word}
                    />
                </label>
                <label>Definition:
                    <input
                        type='text'
                        name='definition'
                        onChange={handleChange}
                        value={values.definition}
                    />
                </label>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
};

export default CreateForm;