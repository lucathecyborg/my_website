const carouselData = [
  {
    img: "projects/1.png",
    text: " Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime, nihil libero totam explicabo nam vitae praesentium perferendis exercitationem, quam corrupti veritatis nisi ipsum iste quis omnis laudantium recusandae dolorem.",
  },
  {
    img: "projects/2.png",
    text: " Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime, nihil libero totam explicabo nam vitae praesentium perferendis exercitationem, quam corrupti veritatis nisi ipsum iste quis omnis laudantium recusandae dolorem.",
  },
  {
    img: "projects/3.png",
    text: " Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime, nihil libero totam explicabo nam vitae praesentium perferendis exercitationem, quam corrupti veritatis nisi ipsum iste quis omnis laudantium recusandae dolorem.",
  },
  {
    img: "projects/4.png",
    text: "Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime, nihil libero totam explicabo nam vitae praesentium perferendis exercitationem, quam corrupti veritatis nisi ipsum iste quis omnis laudantium recusandae dolorem.",
  },
];

let current = 0;

function updateCarousel() {
  document.getElementById("carousel-image").src = carouselData[current].img;
  document.getElementById("carousel-text").textContent =
    carouselData[current].text; // <-- fix here
}

document.getElementById("carousel-left").addEventListener("click", () => {
  current = (current - 1 + carouselData.length) % carouselData.length;
  updateCarousel();
});

document.getElementById("carousel-right").addEventListener("click", () => {
  current = (current + 1) % carouselData.length;
  updateCarousel();
});

// Initialize carousel on page load
updateCarousel();
