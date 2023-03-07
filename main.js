const namePokemon = document.querySelector(".pokemon__name");
const numberPokemon = document.querySelector(".pokemon__number");
const imagePokemon = document.querySelector(".pokemon__image");
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");


const fetchPokemon = async (pokemon) => {
  const apiPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await apiPokemon.json();

  return data;
};


const renderPokemon = async (pokemon) => {
  const data = await FetchPokemon(pokemon);

  namePokemon.innerHTML = data.name;
  numberPokemon.innerHTML = data.id;
  imagePokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

}

form.addEventListener('submit', (event) =>{
event.preventDefault();
renderPokemon(input.value);
input.value = '';
})






const fetchPokemon2 = async (pokemon) => {
    const urlPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    return pokemon
}

fetchPokemon2();

















