import { useState } from "react";

async function fetchPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json(); 
    return data.results;
}

export default function App() {

    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState(null);

    if (pokemons.length === 0) {
        
        fetchPokemon().then(results => {

            console.log("Requisição foi realizada");
            console.log(results);
            setPokemons(results);
        })        
    }
    
    // o código da linha 14 a linha 22 substitui esse código comentado abaixo
    // useEffect(() => {

    //     fetchPokemon().then(results => {

    //         console.log("Requisição foi realizada");
    //         console.log(results);
    //         setPokemons(results);
    //     })
    // }, []);

    const showDetails = async (url) => {

        const data = await fetch(url).then(res => res.json());
        console.log("Pokémon encontrado");
        console.log(data);
        setPokemonDetail(data);
    }

    return (
        <div className="app">
            <div>
                <h2>Pokémon</h2>
                <ul className="pokemon">
                    {pokemons.map(pokemon => (
                        <li key={pokemon.name}>
                            <span>{pokemon.name}</span>

                            <button onClick={() => showDetails(pokemon.url)}>Ver detalhes</button>
                        </li>
                    ))}
                </ul>
            </div>
            
            {pokemonDetail && (
                <div>
                    <h2>{pokemonDetail.name}</h2>
                    <img 
                        src={pokemonDetail.sprites.front_default} 
                        alt="" 
                    />

                    <div className="stat">
                        <b>Tipo: </b>
                        {pokemonDetail.types.map(({ type }) => {
                            <span key={type.name}>{type.name}</span>
                        })}
                    </div>

                    <div className="stat">
                        <b>Altura: </b> {pokemonDetail.height / 10} m
                    </div>

                    <div className="stat">
                        <b>Peso: </b> {pokemonDetail.weight / 10} Kg
                    </div>

                    <div className="stat">
                        <b>Atributos: </b>
                        <ul>
                            {pokemonDetail.stats.map(({ base_stat, stat}) => (
                                <li key={stat.name}>
                                    {stat.name}: {base_stat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="stat">
                        <b>Habilidades: </b>
                        <ul>
                            {pokemonDetail.abilities.map(({ ability, is_hidden }) => {
                                <li key={ability.name}>
                                    {ability.name}
                                    {is_hidden && " (secreta)"}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}