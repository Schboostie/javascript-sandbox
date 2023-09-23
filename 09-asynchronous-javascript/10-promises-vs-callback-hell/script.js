function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Something went wrong");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

// Whatever we return from a .then() is passed into the next .then() callback function args
getData("./movies.json")
  .then((movies) => {
    console.log(movies);
    return getData("./actors.json");
  })
  .then((actors) => {
    console.log(actors);
    return getData("./directors.json");
  })
  .then((directors) => {
    console.log(directors);
  })
  .catch((error) => console.log(error));

//this was added to the file
// JSON data containing actor information
const actorsData = [
  {
    name: "Al Pacino",
    age: "78",
  },
  {
    name: "Robert De Niro",
    age: "76",
  },
  {
    name: "Joe Pesci",
    age: "77",
  },
  {
    name: "Chazz Palminteri",
    age: "62",
  },
];

// Function to create a card for each actor
function createActorCard(actor) {
  const card = document.createElement("div");
  card.classList.add("actor-card");

  const nameElement = document.createElement("h2");
  nameElement.textContent = actor.name;

  const ageElement = document.createElement("p");
  ageElement.textContent = `Age: ${actor.age}`;

  card.appendChild(nameElement);
  card.appendChild(ageElement);

  return card;
}

// Function to render actor cards
function renderActorCards() {
  const container = document.createElement("div");
  container.classList.add("flex-container");

  actorsData.forEach((actor) => {
    const actorCard = createActorCard(actor);
    container.appendChild(actorCard);
  });

  document.body.appendChild(container);
}

// Call the render function
renderActorCards();
