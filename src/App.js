import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [pokeList, setPokeList] = useState([])
  
  const getPokemon = () => {
    
    
    console.log("clicked")
    
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
      console.log("**********")
      console.log(response)
      console.log("**********")
      setPokeList(response.data.results)
    })
    .catch(err =>{
      console.log(err)
    })
  }
  
  return (
    <div className="App">
      <button onClick = {getPokemon}>Fetch Pokemon</button>
      {pokeList.map((pokemon, idx) =>{
        return <ul>
          <li>{pokemon.name}</li>
        </ul>
      })}
    </div>
  );
}

export default App;
