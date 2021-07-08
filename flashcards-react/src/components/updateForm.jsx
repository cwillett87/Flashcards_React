import React, { useState } from 'react';
import useForm from './useForm';
import axios from 'axios'

const UpdateForm = (props) => {
    const {values, handleChange, handleSubmit} = useForm(()=>updateCard(props.flashcard.flashcard.id, values));
    const [flashcard, setFlashcard] = useState(props.flashcards)
    console.log(props.flashcard.flashcard)
        async function updateCard(id, values) {
            const addCard = {['collection']: props.flashcard.flashcard.collection, ...values, ['card_number']: props.flashcard.flashcard.card_number}
            console.log(values)
            try{
                let response = await axios.put(`http://127.0.0.1:8000/collections-flashcard/update/${id}/`, addCard);
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

                <button type='submit'>Submit</button>
                
            </form>
        </div>
    )
};

export default UpdateForm;