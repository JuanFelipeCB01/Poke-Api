import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Gallery() {

  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async ()=>{
    for (let i = 1; i <= 150; i++) {
        const res = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
        setPokemons(res);
    }
  }

  useEffect(()=>{
    getPokemons();
    console.log(pokemons)
  })

  return (
    <div>
      {pokemons?.map((pokemon)=>(
        <div className='card'>
            <title className='card-name'>{pokemon?.name}</title>
            <img className='card-img' src={pokemon?.image} alt={pokemon?.name}/>
            <p>Tipo {pokemon?.type}</p>
        </div>
      ))}
    </div>
  )
}
