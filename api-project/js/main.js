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
            <p class="con" ><strong>Scaling:</strong></p>
            <p class="con" > ${scalingText}</p>
          </div>
          <div class="weapon-cl">
            <p class="con" ><strong>Attack:</strong></p>
            <p class="con" > ${attackText}</p>
          </div>    
          <div class="weapon-cl"> 
            <p class="con" ><strong>Defense:</strong></p>
            <p class="con" > ${defenceText}</p>
          </div>       
        </div> 

        <div class="container">
          <p><strong>Category:</strong> - ${weapon.category}</p>
          <p><strong>Weight:</strong> - ${weapon.weight}</p>
        </div>
      `;

    weaponsListContainer.insertAdjacentHTML("beforeend", weaponHTML);
  });
}

getWeapons();
