// Select all apartment cards
const apartments = document.getElementsByClassName("card");
console.log("Total apartments found:", apartments.length);

// Define smoking and pets preferences for each apartment

// Loop through each apartment and assign properties
function getRandomBoolean() {
  return Math.random() < 0.5;
}

for (let apartment of apartments) {
  const data = {
    smoking: getRandomBoolean(),
    pets: getRandomBoolean(),
  };

  // Find the smoking and pets divs within this apartment
  const smokingDiv = apartment.querySelector(".variableSmoke");
  const petsDiv = apartment.querySelector(".variablePets");

  // Set the content based on the boolean values
  if (smokingDiv) {
    smokingDiv.textContent = `Smoking: ${
      data.smoking ? "Allowed" : "Not Allowed"
    }`;
    smokingDiv.style.color = data.smoking ? "green" : "red";
  }

  if (petsDiv) {
    petsDiv.textContent = `Pets: ${data.pets ? "Allowed" : "Not Allowed"}`;
    petsDiv.style.color = data.pets ? "green" : "red";
  }
}
