// Get all apartment cards from the DOM
const apartments = document.getElementsByClassName("card");
console.log("Total apartments found:", apartments.length);

// Function to generate random true/false values
function getRandomBoolean() {
  return Math.random() < 0.5;
}

// Predefined apartment data array with smoking and pets permissions
const apartmentData = [
  { smoking: false, pets: false }, // Apartment 1: No smoking, No pets
  { smoking: true, pets: true }, // Apartment 2: Smoking allowed, Pets allowed
  { smoking: false, pets: true }, // Apartment 3: No smoking, Pets allowed
  { smoking: false, pets: true }, // Apartment 4: No smoking, Pets allowed
  { smoking: true, pets: true }, // Apartment 5: Smoking allowed, Pets allowed
  { smoking: false, pets: false }, // Apartment 6: No smoking, No pets
];

// Loop through each apartment card
let i = 0;
for (let apartment of apartments) {
  // Get the corresponding data for this apartment from our array
  const data = apartmentData[i];

  // Find the smoking and pets divs within this apartment card
  const smokingDiv = apartment.querySelector(".variableSmoke");
  const petsDiv = apartment.querySelector(".variablePets");

  // Set the content for smoking permissions
  if (smokingDiv) {
    // Use ternary operator to conditionally show different icons and text
    // If data.smoking is true: show smoking icon + "Permitido fumar"
    // If data.smoking is false: show no-smoking icon + "No se permite fumar"
    smokingDiv.innerHTML = `${
      data.smoking
        ? '<img src="assets/imgs/smoking.png" class="icon right"> ' // Green checkmark icon
        : '<img src="assets/imgs/noSmoking.png" class="icon wrong"> ' // Red X icon
    }${data.smoking ? "Permitido fumar" : "No se permite fumar"}`; // Spanish text

    // Set text color: green for allowed, red for not allowed
    smokingDiv.style.color = data.smoking ? "green" : "red";
  }

  // Set the content for pets permissions
  if (petsDiv) {
    // Similar logic for pets:
    // If data.pets is true: show paw icon + "Mascotas permitidas"
    // If data.pets is false: show no-paw icon + "No se permiten mascotas"
    petsDiv.innerHTML = ` ${
      data.pets
        ? '<img src ="assets/imgs/paw.png" class="icon right">' // Paw icon for allowed
        : '<img src="assets/imgs/noPaw.png" class="icon wrong">' // No-paw icon for not allowed
    }
    ${data.smoking ? "Mascotas permitidas" : "No se permiten mascotas"}`; // Spanish text

    // Set text color: green for allowed, red for not allowed
    petsDiv.style.color = data.pets ? "green" : "red";
  }

  // Move to next apartment in the array
  i++;
}
