const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeIcon = document.getElementById("closeIcon");
const hamburgerIcon = document.getElementById("hamburgerIcon");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("hidden");
  if (isOpen) {
    mobileMenu.classList.remove("hidden");
    hamburgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
    hamburgerIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  }
});


// You can add this JavaScript if you'd like to handle clicks or hover effects
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Button Clicked");
});

