import "../css/style.css";

async function getWeapons() {
  const response = await fetch(
    "https://eldenring.fanapis.com/api/weapons?limit=100"
  );
  console.log(response.status);

  const data = await response.json();
  console.log(data.data);

  presentWeapons(data);
}

function presentWeapons(data) {
  const weaponsListContainer = document.querySelector("#weapon-cont");
  weaponsListContainer.innerHTML = "";
  data.data.forEach((weapon) => {
    const weaponHTML = `
      <div class="weapon-item">
        <h2>${weapon.name}</h2>
        <img src="${weapon.image}" alt="${weapon.name}" />
        <p>Description: ${weapon.description}</p>
        <p>Scaling: ${weapon.scalesWith}</p>
        <p>Stat Requirement: ${weapon.requiredAttributes}</p>
        <p>Category: ${weapon.category}</p>
        <p>Weight: ${weapon.weight}</p>
        <p>Attack: ${weapon.attack}</p>
        <p>Defense: ${weapon.defense}</p>
      </div>
    `;
    weaponsListContainer.insertAdjacentHTML("beforeend", weaponHTML);
  });
}

getWeapons();
