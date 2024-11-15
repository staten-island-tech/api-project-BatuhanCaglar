import "./style.css";

async function getgenshin() {
  try {
    const response = await fetch("https://genshin.jmp.blue/characters");
    console.log(response.status);
    //if (response.status != 200) {

    //  throw new Error(response);

    //} else {

    //  const data = await response.json();

    //  console.log(data.data);

    //  data.data.forEach((chararcter) => console.log(chararcter.name));

    //}
  } catch (error) {
    alert("Hey this character doesn't exist");
  }
}

getgenshin();
