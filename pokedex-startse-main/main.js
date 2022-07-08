// Vamos lá!

const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

const fetchPokemon = () => {
    const pokemonPromises = [];

    for (let i=1; i<=151; i++){
        pokemonPromises.push(
            fetch(getPokemonUrl(i)).then((response) => response.json())
        );
    };
};

fetchPokemon();

