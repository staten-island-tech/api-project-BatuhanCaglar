import "../css/style.css";

let allWeapons = [];
let allTalismans = [];

async function getWeapons() {
  const response = await fetch(
    "https://eldenring.fanapis.com/api/weapons?limit=100"
  );
  const data = await response.json();
  return data.data;
}

async function getTalismans() {
  const response = await fetch(
    "https://eldenring.fanapis.com/api/talismans?limit=100"
  );
  const data = await response.json();
  return data.data;
}

function presentWeapons(data) {
  const weaponsListContainer = document.querySelector("#weapons-list");
  weaponsListContainer.innerHTML = "";

  data.forEach((weapon) => {
    const scalingText = weapon.scalesWith
      .map((scale) => `<p>${scale.name}: ${scale.scaling}</p>`)
      .join("");

    const attackText = weapon.attack
      .map((attack) => `<p>${attack.name}: ${attack.amount}</p>`)
      .join("");

    const defenceText = weapon.defence
      .map((defence) => `<p>${defence.name}: ${defence.amount}</p>`)
      .join("");

    const weaponHTML = `
    <div class="weapon-item">
      <h2>${weapon.name}</h2>
      <img src="${weapon.image}" alt="${weapon.name}" />
      <p>Description: ${weapon.description}</p>

      <div class="container">
        <div class="weapon-cl">
          <p>Scaling:</p>
          <p>${scalingText}</p>
        </div>
        <div class="weapon-cl">
          <p>Attack:</p>
          <p>${attackText}</p>
        </div>    
        <div class="weapon-cl"> 
          <p>Defense:</p>
          <p>${defenceText}</p>
        </div>       
      </div> 

        <div class="container">
          <p class="cat">Category - ${weapon.category}</p>
          <p class="cat">Weight - ${weapon.weight}</p>
        </div>

      </div>`;
    weaponsListContainer.insertAdjacentHTML("beforeend", weaponHTML);
  });
}

function presentTalismans(data) {
  const talismansListContainer = document.querySelector("#talismans-list");
  talismansListContainer.innerHTML = "";

  data.forEach((talisman) => {
    const talismanHTML = `
      <div class="talisman-item">
        <h2>${talisman.name}</h2>
        <img src="${talisman.image}" alt="${talisman.name}" />
        <div class="talisman-cl">
          <p>Description: ${talisman.description}</p>
        </div>
        <div class="talisman-cl">
          <p>Effect: ${talisman.effect}</p>
        </div>
      </div>`;
    talismansListContainer.insertAdjacentHTML("beforeend", talismanHTML);
  });
}

async function loadData() {
  allWeapons = await getWeapons();
  allTalismans = await getTalismans();

  presentWeapons(allWeapons);
  presentTalismans(allTalismans);
}

document.getElementById("show-weapons").addEventListener("click", () => {
  document.querySelector("#weapons-list").style.display = "flex";
  document.querySelector("#talismans-list").style.display = "none";
});

document.getElementById("show-talismans").addEventListener("click", () => {
  document.querySelector("#weapons-list").style.display = "none";
  document.querySelector("#talismans-list").style.display = "flex";
});

document.getElementById("show-all").addEventListener("click", () => {
  document.querySelector("#weapons-list").style.display = "flex";
  document.querySelector("#talismans-list").style.display = "flex";
});

loadData();
