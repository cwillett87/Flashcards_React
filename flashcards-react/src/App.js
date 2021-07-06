import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Collections from './components/collection';
import './App.css';
import {Link} from 'react-router-dom';
import FlashcardPage from './components/flashcardPage';
import {Route, Switch} from 'react-router-dom';

function App() {

  const [collections, setCollections] = useState([]);
  const [selected, setSelCollections] = useState([]);

useEffect(() => {
  getAllCollections();
},[]);

let getAllCollections = async () => {
  try{
    let response = await axios.get('http://127.0.0.1:8000/collections/');
    console.log(response.data)
    setCollections(response.data)
    
  }
  catch(err) {
    console.log(err);
  }
}

let sellectedCollection = (selection) => {
  setSelCollections(selection)
}

  return (
    <div>
      <h1>Collections</h1>
      <Switch>
        <Route exact path='/' render={() =><Collections collections={collections} selected={sellectedCollection} />} />
        <Route path='/flashcards' render={props => <FlashcardPage {...props} collections={collections} selected={sellectedCollection} collectionId={selected}/>}/>
      </Switch>
    </div>
  );
}

export default App;
