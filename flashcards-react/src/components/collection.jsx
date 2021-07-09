import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav} from 'react-bootstrap';
import './collection.css'

function Collections(props) {
    console.log(props);


    let collections = props.collections.map(function(collection){
        if(props.collectionId == collection.id){
            console.log('works')
            return  <div>
                        <Nav.Item className='collection'>
                
                            <Link className='link'  to='/flashcards' onClick={() => (props.title(collection.title), props.selected(collection.id))}>{collection.title}</Link>   
                        </Nav.Item>
                    </div>
        }
        else{
            return <Nav.Item className='collection-active'>
            <Link  to='/flashcards' onClick={() => (props.title(collection.title), props.selected(collection.id))}>{collection.title}</Link>   
        </Nav.Item> 
        }
    });
    return(
        <div>
            
            <Nav className='justify-content-center'>
      
                {collections}
           </Nav>
           <h1>Study Hall</h1>
           </div>
    );
}
export default Collections;