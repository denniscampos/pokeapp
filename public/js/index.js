const pokeContainer = document.querySelector(".poke-container");
const pokeCount = 151;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const fetchPoke = async () => {
  for (let i = 1; i <= pokeCount; i++) {
    await getPoke(i);
  }
};

const getPoke = async (id) => {
  try {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(URL);
    const data = await res.json();

    pokeCard(data);
  } catch (err) {
    console.log(err);
  }
};

const pokeCard = (pokemon) => {
  const pokeBox = document.createElement("div");
  pokeBox.classList.add("poke-box");

  // Makes the ID Number 3 digits because of padStart()
  const pokeIdNumber = pokemon.id.toString().padStart(3, "0");
  const pokeType = pokemon.types[0].type.name;
  const color = colors[pokeType];

  pokeBox.style.backgroundColor = color;

  const pokeHTML = `
  <div class="poke-img">
          <img
            src="https://pokeres.bastionbot.org/images/pokemon/${
              pokemon.id
            }.png"
            alt=""
            srcset=""
          />
          <div class="poke-info">
            <span class="poke-number">#${pokeIdNumber}</span>
            <h3 class="poke-name">${pokemon.name.toUpperCase()}</h3>
            <small class="poke-type">Type:${pokeType}</small>
          </div>`;

  pokeBox.innerHTML = pokeHTML;
  pokeContainer.appendChild(pokeBox);
};

fetchPoke();
