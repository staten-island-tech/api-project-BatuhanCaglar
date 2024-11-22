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
    const scalingText = weapon.scalesWith
      .map((scale) => `<li>${scale.name}: ${scale.scaling}</li>`)
      .join("");

    const attackText = weapon.attack
      .map((attack) => `<li>${attack.name}: ${attack.amount}</li>`)
      .join("");

    const defenceText = weapon.defence
      .map((defence) => `<li>${defence.name}: ${defence.amount}</li>`)
      .join("");

    const weaponHTML = `
      <div class="weapon-item">
        <h2>${weapon.name}</h2>
        <img src="${weapon.image}" alt="${weapon.name}" />
        <p>Description: ${weapon.description}</p>
              
        <p><strong>Scaling:</strong></p>
        <ul>${scalingText}</ul>
              
        <p><strong>Attack:</strong></p>
        <ul>${attackText}</ul>
              
        <p><strong>Defense:</strong></p>
        <ul>${defenceText}</ul>
              
        <p><strong>Category:</strong> ${weapon.category}</p>
        <p><strong>Weight:</strong> ${weapon.weight}</p>
      </div>
      `;

    weaponsListContainer.insertAdjacentHTML("beforeend", weaponHTML);
  });
}

getWeapons();
