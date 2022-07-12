import React, { useState } from 'react';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/')
    //         .then(response => response.json())
    //         .then(response => setPokemon(response.results))
    // }, [submit]);

    const pokemon_list = (e) => {
        e.preventDefault()
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }

    return(
        <div>
            <form>
                <button onClick={pokemon_list} type='submit'>Fetch those pokemon!</button>
            </form>
            {
                pokemon.length > 0 ? 
                    pokemon.map((item, i) =>{
                        return(
                            <ul>
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