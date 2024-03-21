/*
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set canvas size based on window dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const backgrounds = [
  "assets/images/canvas/00_backgrounds/forest.png",
  "assets/images/canvas/00_backgrounds/jungle.png",
  "assets/images/canvas/00_backgrounds/desert.png",
  "assets/images/canvas/00_backgrounds/plage.png",
];

let currentBackground =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

// Recalculate center and square position for responsiveness
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const squareTopLeftX = centerX - 50;
const squareTopLeftY = centerY - 50;

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Updated drawImageOnCanvas function to include resizing logic
function drawImageOnCanvas(imagePath, x, y, width, height) {
  const image = new Image();
  image.onload = function () {
    // Adjust x and y to draw the image centered at the specified location
    const adjustedX = x - width / 2;
    const adjustedY = y - height / 2;

    ctx.drawImage(image, adjustedX, adjustedY, width, height);

    // Draw boundary for testing
    ctx.strokeStyle = "red"; // Set boundary color to red for visibility
    ctx.strokeRect(adjustedX, adjustedY, width, height); // Draw the rectangle outline
  };
  image.src = imagePath;
}

function drawBackground() {
  const bgImage = new Image();
  bgImage.onload = () =>
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  bgImage.src = currentBackground;
}

function loadRandomAnimalPart(partName, folderPath) {
  const partNumber = Math.floor(Math.random() * 3) + 1;
  return `${folderPath}/${partName}${partNumber}.png`;
}

function loadAnimal() {
  const maxWidth = canvas.width * 0.15; // Adjusted to account for both images side by side
  const maxHeight = canvas.height * 0.3; // Keeping the same ratio for height
  const backPath = loadRandomAnimalPart("back", "assets/images/canvas/02_back");
  const frontPath = loadRandomAnimalPart(
    "front",
    "assets/images/canvas/01_front"
  );

  // Calculating positions
  const imageY = canvas.height - maxHeight / 2 - 20; // 20px up from the bottom of the canvas
  const gap = 20; // Gap between the images
  const totalWidth = maxWidth * 2 + gap; // Total width of both images plus the gap
  const backImageX = canvas.width / 2 - totalWidth / 2 + maxWidth / 2; // Positioning back image on the left
  const frontImageX = canvas.width / 2 + totalWidth / 2 - maxWidth / 2; // Positioning front image on the right

  drawImageOnCanvas(backPath, backImageX, imageY, maxWidth, maxHeight);
  drawImageOnCanvas(frontPath, frontImageX, imageY, maxWidth, maxHeight);
}

function reloadAnimal() {
  // clearCanvas();
  drawBackground();
  loadAnimal();
}

document.querySelector(".download").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "my-animal-chimera.png";
  link.href = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  if (
    x >= squareTopLeftX &&
    x <= squareTopLeftX + 100 &&
    y >= squareTopLeftY &&
    y <= squareTopLeftY + 100
  ) {
    reloadAnimal();
  }
});

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  canvas.style.cursor =
    x >= squareTopLeftX &&
    x <= squareTopLeftX + 100 &&
    y >= squareTopLeftY &&
    y <= squareTopLeftY + 100
      ? "pointer"
      : "";
});

window.onload = reloadAnimal; // Load random animal and background initially

//const promptElement = document.getElementById("prompt");
//promptElement.style.left = `${squareTopLeftX + canvas.offsetLeft}px`;
//promptElement.style.top = `${squareTopLeftY + canvas.offsetTop}px`;

// Adding event listeners to the background change buttons
document.getElementById('forest').addEventListener('click', () => changeBackground(0));
document.getElementById('jungle').addEventListener('click', () => changeBackground(1));
document.getElementById('desert').addEventListener('click', () => changeBackground(2));
document.getElementById('plage').addEventListener('click', () => changeBackground(3));

function changeBackground(index) {
  currentBackground = backgrounds[index];
  reloadAnimal(); // Reload the canvas with the new background
}  
 */

/*
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Set canvas size based on window dimensions
  function adjustCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }

  adjustCanvasSize(); // Initial adjustment
  window.addEventListener('resize', adjustCanvasSize); // Adjust on window resize

  // Assuming these functions to load and draw animals
  let currentBackPath, currentFrontPath; // Store paths for drawn animals

  function loadRandomAnimalPart(partName, folderPath) {
      const partNumber = Math.floor(Math.random() * 3) + 1; // Assuming 3 variations per part
      return `${folderPath}/${partName}${partNumber}.png`;
  }

  function drawAnimals() {
      if (!currentBackPath || !currentFrontPath) {
          // Load animals for the first time or when explicitly needed
          currentBackPath = loadRandomAnimalPart("back", "assets/images/canvas/02_back");
          currentFrontPath = loadRandomAnimalPart("front", "assets/images/canvas/01_front");
      }

      // Drawing logic for animals, adjust as necessary for your project
      const imageY = canvas.height - 150; // Adjust based on your needs
      drawImageOnCanvas(currentBackPath, 100, imageY, 200, 200); // Example positions and sizes
      drawImageOnCanvas(currentFrontPath, canvas.width - 300, imageY, 200, 200);
  }

  function drawImageOnCanvas(imagePath, x, y, width, height) {
      const image = new Image();
      image.onload = function () {
          ctx.drawImage(image, x, y, width, height);
      };
      image.src = imagePath;
  }

  // Background change functionality integrated with CSS
  document.getElementById('forest').addEventListener('click', () => changeBackground('forest'));
  document.getElementById('jungle').addEventListener('click', () => changeBackground('jungle'));
  document.getElementById('desert').addEventListener('click', () => changeBackground('desert'));
  document.getElementById('plage').addEventListener('click', () => changeBackground('plage'));

  function changeBackground(backgroundClass) {
      const backgroundContainer = document.querySelector('.canvas-container');
      // Remove all previous background classes
      backgroundContainer.className = 'canvas-container';
      // Add the new background class
      backgroundContainer.classList.add(`background-${backgroundClass}`);
  }

  // Initial loading of animals on the canvas
  window.onload = () => {
      adjustCanvasSize();
      drawAnimals(); // Ensure this runs after the canvas is ready and sized
  };

  // Optional: Consider adding a button or another mechanism to change animals without changing the background
});
*/

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const backgrounds = [
    "assets/images/canvas/00_backgrounds/forest.png",
    "assets/images/canvas/00_backgrounds/jungle.png",
    "assets/images/canvas/00_backgrounds/desert.png",
    "assets/images/canvas/00_backgrounds/plage.png",
  ];

  let currentBackgroundIndex = Math.floor(Math.random() * backgrounds.length);

  let currentBackAnimalPath = "";
  let currentFrontAnimalPath = "";

  function drawBackground() {
    const bgImage = new Image();
    bgImage.src = backgrounds[currentBackgroundIndex];
    bgImage.onload = () => {
      ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
      drawAnimals();
    };
  }

  function loadRandomAnimalPart(partName, folderPath) {
    const partNumber = Math.floor(Math.random() * 18) + 1;
    return `${folderPath}/${partName}${partNumber}.png`;
  }

  function drawAnimals() {
    const maxImageHeight = 450;
    const gap = -3;

    let backWidth, backHeight, frontWidth, frontHeight;
    let backX, backY, frontX, frontY;

    const backAnimal = new Image();
    backAnimal.src = currentBackAnimalPath;
    backAnimal.onload = () => {
      backHeight = Math.min(backAnimal.height, maxImageHeight);
      backWidth = (backAnimal.width * backHeight) / backAnimal.height;
      if (frontAnimal.complete) drawBothAnimals();
    };

    const frontAnimal = new Image();
    frontAnimal.src = currentFrontAnimalPath;
    frontAnimal.onload = () => {
      frontHeight = Math.min(frontAnimal.height, maxImageHeight);
      frontWidth = (frontAnimal.width * frontHeight) / frontAnimal.height;
      if (backAnimal.complete) drawBothAnimals();
    };

    function drawBothAnimals() {
      const totalWidth = backWidth + frontWidth + gap;
      backX = (canvas.width - totalWidth) / 2;
      backY = canvas.height - backHeight - 20;
      frontX = backX + backWidth + gap;
      frontY = canvas.height - frontHeight - 20;

      ctx.drawImage(backAnimal, backX, backY, backWidth, backHeight);
      /* ctx.strokeStyle = "red";
      ctx.strokeRect(backX, backY, backWidth, backHeight); */

      ctx.drawImage(frontAnimal, frontX, frontY, frontWidth, frontHeight);
      /* ctx.strokeStyle = "red";
      ctx.strokeRect(frontX, frontY, frontWidth, frontHeight); */
    }
  }

  ["forest", "jungle", "desert", "plage"].forEach((id, index) => {
    document.getElementById(id).addEventListener("click", () => {
      currentBackgroundIndex = index;
      drawBackground();
    });
  });

  document.getElementById("prompt").addEventListener("click", () => {
    currentBackAnimalPath = loadRandomAnimalPart("back", "assets/images/canvas/02_back");
    currentFrontAnimalPath = loadRandomAnimalPart("front", "assets/images/canvas/01_front");
    drawBackground();
  });

  drawBackground();

  // Download function
  document.querySelector(".download").addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "canvas-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});


