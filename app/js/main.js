import "../css/style.css";

let allWeapons = [];
let allTalismans = [];

async function getWeapons() {
  const response = await fetch("https://eldenring.fanapis.com/api/weapons?limit=100");
  const data = await response.json();
  return data.data;
}

async function getTalismans() {
  const response = await fetch("https://eldenring.fanapis.com/api/talismans?limit=100");
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
      <div class="bg-[#292323] rounded-xl shadow-lg p-4 flex flex-col items-center text-center w-[90%] max-w-sm">
        <h2 class="text-xl font-handjet text-[#829bb3]">${weapon.name}</h2>
        <img src="${weapon.image}" alt="${weapon.name}" class="w-full h-auto rounded-md mt-4" />
        <p class="text-white mt-4">${weapon.description}</p>
        <div class="flex justify-between mt-4 gap-4">
          <div class="flex-1 border border-[#829bb3] rounded-lg p-4 text-sm">
            <h3 class="text-white font-bold">Scaling:</h3>
            ${scalingText}
          </div>
          <div class="flex-1 border border-[#829bb3] rounded-lg p-4 text-sm">
            <h3 class="text-white font-bold">Attack:</h3>
            ${attackText}
          </div>
          <div class="flex-1 border border-[#829bb3] rounded-lg p-4 text-sm">
            <h3 class="text-white font-bold">Defense:</h3>
            ${defenceText}
          </div>
        </div>
        <div class="mt-4 text-sm text-white">
          <p class="text-white font-bold" >Category: ${weapon.category}</p>
          <p class="text-white font-bold" >Weight: ${weapon.weight}</p>
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
      <div class="bg-[#292323] rounded-xl shadow-lg p-4 flex flex-col items-center text-center w-[90%] max-w-sm">
        <h2 class="text-lg font-handjet text-[#829bb3]">${talisman.name}</h2>
        <img src="${talisman.image}" alt="${talisman.name}" class="w-full h-auto rounded-md mt-4" />
        <p class="text-white mt-4">${talisman.description}</p>
        <p class="text-white mt-4"><strong>Effect:</strong> ${talisman.effect}</p>
      </div>`;
    talismansListContainer.insertAdjacentHTML("beforeend", talismanHTML);
  });
}

async function loadData() {
  allWeapons = await getWeapons();
  allTalismans = await getTalismans();

  presentWeapons(allWeapons);
  presentTalismans(allTalismans);

  // Ensure both lists are visible when the page loads
  document.querySelector("#weapons-list").style.display = "grid";
  document.querySelector("#talismans-list").style.display = "grid";
}

document.getElementById("show-weapons").addEventListener("click", () => {
  document.querySelector("#weapons-list").style.display = "grid";
  document.querySelector("#talismans-list").style.display = "none";
});

document.getElementById("show-talismans").addEventListener("click", () => {
  document.querySelector("#weapons-list").style.display = "none";
  document.querySelector("#talismans-list").style.display = "grid";
});

document.getElementById("show-all").addEventListener("click", () => {
  document.querySelector("#weapons-list").style.display = "grid";
  document.querySelector("#talismans-list").style.display = "grid";
});

loadData();
