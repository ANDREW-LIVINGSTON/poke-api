import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [pokeList, setPokeList] = useState([])
  
  const getPokemon = () => {
    
    
    console.log("clicked")
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
      console.log("**********")
      console.log(response)
      console.log("**********")
      return response.json()
    })
    .then(response => {
      console.log("!!!!!!!!!")
      console.log(response)
      console.log("!!!!!!!!!")
      setPokeList(response.results)
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
