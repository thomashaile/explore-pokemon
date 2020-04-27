export default class Pokemon {

  name = '';
  spriteURL = '';

  constructor(data) {
    this.name = data.name;
    this.spriteURL = data.sprites.front_shiny
  }

  render() {

    const poke_img = document.createElement("img");
    poke_img.src = this.spriteURL;

    const poke_p = document.createElement("p");
    poke_p.innerHTML = "this is " + this.name;

    const container = document.createElement('div');
    container.appendChild(poke_p);
    container.appendChild(poke_img);
    container.id = name;

    return container;
  }

}
