import React from 'react';
import useForm from './useForm';

const CreateForm = () => {
    const {values, handleChange, handleSubmit } = useForm(create);

    function create(){

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