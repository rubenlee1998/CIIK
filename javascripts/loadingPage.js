// Show the loading overlay
document.getElementById("loading-overlay").style.display = "block";

// Delay the removal of the loading overlay
setTimeout(function () {
  document.getElementById("loading-overlay").classList.add("fade-out");
  // Hide the overlay after the animation completes
  setTimeout(function () {
    document.getElementById("loading-overlay").style.display = "none";
  }, 1000);
}, 5000); // Delay for 5 seconds

const springText = document.getElementById("spring-text");
setTimeout(() => {
  anime({
    targets: springText,
    opacity: 0,
    duration: 1000,
    easing: "linear",
    complete: function (anim) {
      springText.parentNode.removeChild(springText);
    },
  });
}, 3000);

var progressBarFill = document.querySelector(".progress-bar-fill");
var progress = 0;
var intervalId = setInterval(function () {
  progress += 10;
  progressBarFill.style.width = progress + "%";
  if (progress >= 100) {
    clearInterval(intervalId);
    // Fade out the overlay after a delay
    setTimeout(function () {
      document.getElementById("loading-overlay").classList.add("fade-out");
      // Hide the overlay after the animation completes
      setTimeout(function () {
        document.getElementById("loading-overlay").style.display = "none";
      }, 1000);
    }, 500);
  }
}, 500);

var imageElements = document.querySelectorAll("#image-container img");

// Set initial position and opacity for images
anime.set(imageElements, {
  translateX: "100vh",
  opacity: 0,
});

// Animate each image sequentially
imageElements.forEach(function (image, index) {
  anime({
    targets: image,
    translateX: ["100vh", "0"],
    opacity: [0, 1],
    delay: index * 1000, // Delay animation for each image
    duration: 2000, // Animation duration
    easing: "easeInOutQuad", // Animation easing
  });
});
