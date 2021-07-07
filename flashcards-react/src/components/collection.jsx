import React from 'react';
import {Link} from 'react-router-dom';

function Collections(props) {
    console.log(props);

    let collections = props.collections.map(function(collection){
        return <h1>
            <Link to='/flashcards' onClick={() => (props.title(collection.title), props.selected(collection.id))}>
            {collection.title}
            </Link>
        </h1>
    });
    return(
        <div>
            <h1>Collections</h1>
            {collections}
        </div>
    );
}
export default Collections;