class Pet {
  constructor(petName, ownerName, species = null, breed = null) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static sameOwner(pet1, pet2) {
    return pet1.ownerName == pet2.ownerName ? "Hanno lo stesso padrone" : "Hanno padroni diversi";
  }
}

const pet1 = new Pet("Gigi", "Alfonso", "Cat", "European");
const pet2 = new Pet("Coco", "Liv", "Bunny", "Mini Lop");
console.log(Pet.sameOwner(pet1, pet2));

const handleSubmit = function (e) {
  e.preventDefault();

  const petName = document.getElementById("petName");
  const ownerName = document.getElementById("ownerName");
  const species = document.getElementById("species");
  const breed = document.getElementById("breed");

  const pet = new Pet(petName.value, ownerName.value, species.value, breed.value);
  console.log(pet);

  const row = document.querySelector(".row");
  const col = document.createElement("div");
  col.classList.add("col");
  const div = document.createElement("div");
  div.classList.add("d-flex");
  div.classList.add("flex-column");
  div.classList.add("align-items-start");
  div.classList.add("justify-content-between");
  div.classList.add("p-2");
  div.classList.add("bg-white");
  div.classList.add("border");
  div.classList.add("border-1");
  div.classList.add("border-dark");

  div.innerHTML = `<p>Pet Name: ${pet.petName}</p>
                    <p>Owner Name: ${pet.ownerName}</p>
                    <p>Species: ${pet.species}</p>
                    <p>Breed: ${pet.breed}</p>
  `;
  col.appendChild(div);
  row.appendChild(col);

  petName.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";
};

window.onload = function () {
  document.querySelector("form").addEventListener("submit", handleSubmit);
};
