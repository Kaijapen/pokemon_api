import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [onePokemon, setOnePokemon] = useState('');
    const [pokemon, setPokemon] = useState([]);
    const [submitAll, setSubmittedAll] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const pokemon_list = (e) => {
        e.preventDefault()
        setSubmittedAll(true)
    }

    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => {setPokemon(response.data.results)})
    }, [submitAll]);
    
    return(
        <div>
            <h1>Let's catch some pokemon</h1>
            <form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <div className='d-flex align-items-center'>
                    <label htmlFor='name' className='form-label me-3'>Pokemon Name:</label>
                    <input type="text" name='name' className='form-control w-75'/>
                </div>
                <div className='d-flex align-items-end flex-column'>
                    <button className='btn btn-primary' type='submit'>Display One Pokemon</button>
                    <button className='btn btn-success' onClick={pokemon_list}>Fetch ALL pokemon!</button>
                </div>
            </form>
            {
                submitAll ? 
                    pokemon.map((item, i) =>{
                        return(
                            <ul className='w-25 mx-auto'>
                                <li key={i}>{item.name}</li>
                            </ul>
                        );
                    }):
                    <p>No pokemans :(</p>
            }
        </div>
    );
}
export default Pokemon