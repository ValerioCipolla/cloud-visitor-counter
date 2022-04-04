const counter = document.getElementById("counter");

async function fetchData() {
  const res = await fetch(
    `https://rci0sg2k5i.execute-api.eu-west-2.amazonaws.com/`
  );
  const data = await res.json();
  console.log(data);
  counter.textContent = data;
}

fetchData();
