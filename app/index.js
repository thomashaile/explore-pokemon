import Pokemon from './pokemon.js';

document.getElementById('choose-pokemon-button').onclick = (event) => {
  const pokeId = event.target.form.userId.value;
  console.log('\nfetching pokemon with id ', pokeId);
  fetch('https://pokeapi.co/api/v2/pokemon/' + pokeId)
    .then(res => res.json())
    .then(pokeData => {
      console.log('pokemon data from API', pokeData);
      return new Pokemon(pokeData);
    })
    .then(pokemon => {
      console.log('new pokemon instance', pokemon);
      const view = pokemon.render();
      document.getElementById('root').appendChild(view);
    })
    .catch(err => console.error(err));

}
