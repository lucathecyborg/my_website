const carouselData = [
  {
    img: "projects/game.png",
    text: "A 2d c++ game made using SDL2 and its various libraries. This was made for my final mark for my year 3 programming course.",
    head: "Jhonny English:"
  },
  {
    img: "projects/2.png",
    text: " Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime, nihil libero totam explicabo nam vitae praesentium perferendis exercitationem, quam corrupti veritatis nisi ipsum iste quis omnis laudantium recusandae dolorem.",
    head: "Multipurpose RC remote:"
  },
  {
    img: "projects/3.png",
    text: " Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime, nihil libero totam explicabo nam vitae praesentium perferendis exercitationem, quam corrupti veritatis nisi ipsum iste quis omnis laudantium recusandae dolorem.",
    head: "esp32 based drone:"
  },
  {
    img: "projects/4.png",
    text: "Lorem 4 ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime, nihil libero totam explicabo nam vitae praesentium perferendis exercitationem, quam corrupti veritatis nisi ipsum iste quis omnis laudantium recusandae dolorem.",
    head: "This website:"
  },
  {
    img: "projects/4.png",
    text: "Lorem 5 ipsum dolor sit amet consectetur adipisicing elit. Quisquam maxime, nihil libero totam explicabo nam vitae praesentium perferendis exercitationem, quam corrupti veritatis nisi ipsum iste quis omnis laudantium recusandae dolorem.",
    head: "Alarm clock:"
  },
];

let current = 0;

const imageEl = document.getElementById("carousel-image");
const textEl = document.getElementById("carousel-text");
const headEl = document.getElementById("carousel-head");
const leftBtn = document.getElementById("carousel-left");
const rightBtn = document.getElementById("carousel-right");

function updateCarouselContent(index) {
  imageEl.src = carouselData[index].img;
  textEl.textContent = carouselData[index].text;
  headEl.textContent = carouselData[index].head;
}

function animateCarousel(direction) {
  // Remove any existing animation classes
  imageEl.classList.remove("carousel-slide-in-left", "carousel-slide-in-right", "carousel-slide-out-left", "carousel-slide-out-right");
  textEl.classList.remove("carousel-slide-in-left", "carousel-slide-in-right", "carousel-slide-out-left", "carousel-slide-out-right");
  headEl.classList.remove("carousel-slide-in-left", "carousel-slide-in-right", "carousel-slide-out-left", "carousel-slide-out-right");

  // Animate out
  if (direction === "left") {
    imageEl.classList.add("carousel-slide-out-right");
    textEl.classList.add("carousel-slide-out-right");
    headEl.classList.add("carousel-slide-out-right");
  } else {
    imageEl.classList.add("carousel-slide-out-left");
    textEl.classList.add("carousel-slide-out-left");
    headEl.classList.add("carousel-slide-out-left");
  }

  setTimeout(() => {
    // Update content
    updateCarouselContent(current);

    // Remove out classes and add in classes
    imageEl.classList.remove("carousel-slide-out-left", "carousel-slide-out-right");
    textEl.classList.remove("carousel-slide-out-left", "carousel-slide-out-right");
    headEl.classList.remove("carousel-slide-out-left", "carousel-slide-out-right");

    if (direction === "left") {
      imageEl.classList.add("carousel-slide-in-left");
      textEl.classList.add("carousel-slide-in-left");
      headEl.classList.add("carousel-slide-in-left");
    } else {
      imageEl.classList.add("carousel-slide-in-right");
      textEl.classList.add("carousel-slide-in-right");
      headEl.classList.add("carousel-slide-in-right");
    }
  }, 400); // Match CSS animation duration
}

leftBtn.addEventListener("click", () => {
  current = (current - 1 + carouselData.length) % carouselData.length;
  animateCarousel("left");
});

rightBtn.addEventListener("click", () => {
  current = (current + 1) % carouselData.length;
  animateCarousel("right");
});

// Initialize carousel on page load
updateCarouselContent(current);