import "./style.css";

async function getgenshin() {
  try {
    const response = await fetch("");
    console.log(response.status);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();

      console.log(data.data);

      data.data.forEach(() => console.log(.name));
    }
  } catch (error) {
    alert("Hey this city doesn't exist");
  }
}

getgenshin();
