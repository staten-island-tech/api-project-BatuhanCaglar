import "../CSS/style.css";

export const DOMSelectors = {
  weaponBtn: document.getElementById("weapons-btn"),
  talismanBtn: document.getElementById("talismans-btn"),
};

document.addEventListener("DOMContentLoaded", function () {
  const DOMSelectors = {
    themeBtn: document.querySelector("#themebtn"),
};


async function getWeapons() {
  const response = await fetch(
    "https://eldenring.fanapis.com/api/weapons?limit=100"
  );
  console.log(response.status);

  let data = await response.json();
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

      <div class="contdescription">
        <p class="titledesc" >Description:</p>
        <p> ${weapon.description}</p>    
      </div> 

        <div class="statcontainer">
          <div class="weapon-cl">
            <p class="stattitle" >Scaling:</p>
            <p class="con" > ${scalingText}</p>
          </div>

          <div class="weapon-cl">
            <p class="stattitle">Attack:</p>
            <p class="con" > ${attackText}</p>
          </div>

          <div class="weapon-cl"> 
            <p class="stattitle">Defense:</p>
            <p class="con" > ${defenceText}</p>
          </div>

        </div> 

        <div class="containerextra">
          <p>Category: - ${weapon.category}</p>
          <p>Weight: - ${weapon.weight}</p>
        </div>

      `;
  
    weaponsListContainer.insertAdjacentHTML("beforeend", weaponHTML);
});
}

getWeapons();


async function getTalismans() {
  const response = await fetch(
    "https://eldenring.fanapis.com/api/talismans?limit=100"
  );
  console.log(response.status);

  let data = await response.json();
  console.log(data.data);

  presentTalismans(data);
}


function presentTalismans(data) {
  const talismansListContainer = document.querySelector("#talismans-cont");
  talismansListContainer.innerHTML = "";

  data.data.forEach((talisman) => {
    const talismanHTML = `
      <div class="talisman-item">
        <h2>${talisman.name}</h2>
        <img src="${talisman.image}" alt="${talisman.name}" />

      <div class="talismandesc">
        <p class="titledesc" >Description:</p>
        <p class="talisman-cl"> ${talisman.description}</p>    
        <p class="talisman-cl"> ${talisman.effect}</p>
      </div> 
      `;
      talismansListContainer.insertAdjacentHTML("beforeend", talismanHTML);
});
}

getTalismans();

DOMSelectors.themeBtn.addEventListener("click", function () {
      if (document.body.classList.contains("cool")) {
        document.body.classList.remove("cool");
        document.body.classList.add("warm");
      } else {
        document.body.classList.add("cool");
        document.body.classList.remove("warm");


}});

});
