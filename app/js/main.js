import "../CSS/style.css";

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

      <div class="containerd">
        <p class="conh" >Description:</p>
        <p class="description"> ${weapon.description}</p>    
      </div> 

        <div class="container">
          <div class="weapon-cl">
            <p class="conh" >Scaling:</p>
            <p class="con" > ${scalingText}</p>
          </div>
          <div class="weapon-cl">
            <p class="conh">Attack:</p>
            <p class="con" > ${attackText}</p>
          </div>    
          <div class="weapon-cl"> 
            <p class="conh">Defense:</p>
            <p class="con" > ${defenceText}</p>
          </div>       
        </div> 

        <div class="containerc">
          <p>Category: - ${weapon.category}</p>
          <p>Weight: - ${weapon.weight}</p>
        </div>

      `;

    weaponsListContainer.insertAdjacentHTML("beforeend", weaponHTML);
});
}

getWeapons();
