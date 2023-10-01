// Code here

// Deliverable 1
const init = () => {
  const beerDetails = document.getElementById("beer-details"); //getting the id of beer-details
  const beerName = document.getElementById("beer-name"); //getting the id of beer-name
  const beerImage = document.getElementById("beer-image"); //getting the id of beer-image
  const beerDescription = document.getElementById("beer-description"); //getting the id of beer-description
  const reviewList = document.getElementById("review-list"); //getting the id of review-list

  fetch("http://localhost:3000/beers/1") // The endpoint of accessing the details of beers
    .then((response) => response.json())
    .then((data) => {
      // Update the DOM elements with beer details
      beerName.textContent = data.name;
      beerImage.src = data.image_url;
      beerDescription.textContent = data.description;

      // Create list items for reviews and add them to the reviews list
      data.reviews.forEach((review) => {
        const li = document.createElement("li");
        li.textContent = review;
        reviewList.appendChild(li);
      });

      // Show the beer details section
      beerDetails.style.display = "block";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

document.addEventListener("DOMContentLoaded", init);

// Deliverable 2
// Function to fetch and render the beer list
function fetchAndRenderBeerList() {
  const beerList = document.getElementById("beer-list");

  // Make a GET request to retrieve the list of beers
  fetch("http://localhost:3000/beers")
    .then((response) => response.json())
    .then((beers) => {
      // Loop through the list of beers and populate the beer list
      beers.forEach((beer) => {
        const li = document.createElement("li"); // Create an <li> element
        li.textContent = beer.name; // Set the text content to the beer name
        beerList.appendChild(li); // Append the <li> to the <ul>
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Call the fetchAndRenderBeerlist function when the page loads
document.addEventListener("DOMContentLoaded", fetchAndRenderBeerList);

// Deliverable 3
document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("review-form"); //getting the id of review-form
  const reviewList = document.getElementById("review-list"); //getting the id of review-list

  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    // Get the review text from the textarea input field
    const reviewText = document.getElementById("review").value;

    // Create a new list item for the review
    const newReviewItem = document.createElement("li");
    newReviewItem.textContent = reviewText;

    // Append the new review to the list of reviews
    reviewList.appendChild(newReviewItem);

    // Clear the input field
    document.getElementById("review").value = "";
  });
});

// Bonus Deliverable , removing a review when clicked.
document.addEventListener("DOMContentLoaded", () => {
  const reviewList = document.getElementById("review-list");

  // Add a click event listener to the review list
  reviewList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      // Check if the clicked element is an <li> element
      e.target.remove(); // Remove the clicked review
    }
  });
});
