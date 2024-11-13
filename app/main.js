import "./style.css";

async function getheros() {
  try {
    const response = await fetch();
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console(data.data);
      data.data.forEach((agent) => console.log(agent.displayName));
    }
  } catch (error) {
    alert("woah buddy");
  }
}

getdata();
