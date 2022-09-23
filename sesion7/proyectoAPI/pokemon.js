const pokedex = document.getElementById('pokedex');
const fetchPokemon=()=>{
    const promises=[];
    for(let i=1; i<=151; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        promises.push(fetch(url).then((response) => response.json()));
    }

    Promise.all(promises).then((results)=>{
        const pokemon = results.map((result)=>({
            name:result.name,
            image:result.sprites['front_default'],
            type:result.types.map((type)=>type.type.name).join(', '),
            id:result.id
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon=(pokemon)=>{
    console.log(pokemon);
    const pokemonString=pokemon.map((info)=>`
        <li class="card">
        <img class="card-image" src="${info.image}"/>
        <h2 class="card-title">${info.id}.${info.name}</h2>
        <p class="card-subtitle">Type:${info.type}</p>
        </li>
        `
    )
    .join('');
    pokedex.innerHTML = pokemonString;
};
fetchPokemon();
