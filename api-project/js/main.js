import "../css/style.css";

async function getWeapons() {
  try {
    const response = await fetch("https://eldenring.fanapis.com/api/weapons?limit=10");
    console.log(response.status);
    if (response.status !== 100) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data.data);

      presentWeapons(data); 
    }
  } catch (error) {
    alert("Hey these weapons don't exist!");
  }
}

function presentWeapons(data) {
  const weaponsListContainer = document.querySelector("weapon-cont"); 
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
