import "../css/style.css";

async function getweapons() {
  try {
    const response = await fetch(
      "https://eldenring.fanapis.com/api/weapons?limit=100"
    );
    console.log(response.status);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();

      console.log(data.data);

      data.data.forEach((data) => console.log(data.name));
    }
  } catch (error) {
    alert("Hey these weapons does exist");
  }
}
getweapons();

function presentweapons(data) {
  weaponsListContainer.innerHTML = "";
  data.data.forEach((data) => {
    const weaponHTML = `
      <div class="weapon-item">        
        <h2>${data.name}</h2>        
        <img src="${data.image}" alt="${data.name}" /img>
        <p>Description: ${data.description}</p>
        <p>Scaling: ${data.scalesWith}</p>
        <p>Stat Requirement: ${data.requiredAttributes}</p>
        <p>Category: ${data.category}</p>
        <p>Weight: ${data.weight}</p>
        <p>Attack: ${data.attack}</p>
        <p>Defence: ${data.defence}</p>
    </div>
  `;
    weaponsListContainer.insertAdjacentHTML("beforeend", weaponHTML);
  });
}

presentweapons(data);
