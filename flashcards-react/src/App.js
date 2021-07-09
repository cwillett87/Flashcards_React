import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Collections from './components/collection';
import './App.css';
import FlashcardPage from './components/flashcardPage';
import {Route, Switch} from 'react-router-dom';
import FormPage from './components/formPage';
import UpdatePage from './components/updatePage';

function App() {

  const [collections, setCollections] = useState([]);
  const [selected, setSelCollections] = useState([]);
  const [selectedTitle, setSelTitle] = useState([]);

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

let collectionTitle = (title) => {
  setSelTitle(title)
}

  return (
    <div className='app'>
      <Collections className='app' collections={collections} selected={sellectedCollection} title={collectionTitle} collectionId={selected}/>
      <div>
        <Switch>
          {/* <Route exact path='/' render={() =><Collections collections={collections} selected={sellectedCollection} title={collectionTitle}/>} /> */}
          <Route path='/flashcards' render={props => <FlashcardPage {...props} title={selectedTitle} collections={collections} selected={sellectedCollection} collectionId={selected}/>}/>
          <Route path='/form' render={props => <FormPage {...props} collectionId={selected}/>}/>
          <Route path='/edit' render={props => <UpdatePage {...props} collectionId={selected} />}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
