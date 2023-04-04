let container = document.createElement("div");
container.setAttribute("class", "container");

let row = document.createElement("div");
row.setAttribute("class", "row");

container.append(row);
getNames();

async function getNames() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    displayData(data);
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  for (let i = 0; i <data.length; i++) {
   
    row.innerHTML += `
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">User ID: ${data[i].userId}</div>
          <div class="card-body">
            <h5 class="card-title">Id: ${data[i].id}</h5>
            <p class="card-text">Tittle: ${data[i].title}</p>
            <p></p>
          </div>
        </div>`;
  }
  document.body.append(container);
}
