import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import CreateForm from './createForm';

function FormPage(props) {
    console.log(props)
    return(
        <div>
            <CreateForm collectionId={props.collectionId} flashcards={props.history.location.query} />
        </div>
    );
}

export default withRouter(FormPage);