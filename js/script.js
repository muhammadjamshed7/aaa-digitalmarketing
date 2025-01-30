

// Add menu toggle logic
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeIcon = document.getElementById("closeIcon");
const hamburgerIcon = document.getElementById("hamburgerIcon");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("hidden");

  if (isOpen) {
    mobileMenu.classList.remove("hidden");
    hamburgerIcon.classList.add("hidden");
  }
});

// You can add this JavaScript if you'd like to handle clicks or hover effects
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Button Clicked");
});



// Add Career form validation logic
document
  .getElementById("careers-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      age: document.getElementById("age").value,
      email: document.getElementById("email").value,
      contact: document.getElementById("contact").value,
      currentSalary: document.getElementById("currentSalary").value,
      expectedSalary: document.getElementById("expectedSalary").value,
      lastQualification: document.getElementById("lastQualification").value,
      jobPosition: document.getElementById("jobPosition").value,
      graduationYear: document.getElementById("graduationYear").value,
      upload: document.getElementById("upload").files[0], // Files are handled separately
    };

    if (Number(formData.age) < 18 || Number(formData.age) === NaN) {
      alert("Please enter a valid age (18 or above).");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!formData.contact.match(/^\d{10}$/)) {
      alert("Please enter a valid contact number (10 digits).");
      return;
    }

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      if (result.success) {
        alert("Thank you for your submission!");
        document.getElementById("careers-form").reset();
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
  });




// add contact form validation logic
document
  .getElementById("contact-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      contact: document.getElementById("contact").value,
      projectDescription: document.getElementById("projectDescription").value,
      budget: document.getElementById("budget").value,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9b25c86e-31b7-4534-9c65-76ae753385ee",
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Thank you for your submission!");
        document.getElementById("contact-form").reset();
      } else {
        alert("There was an error submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
  });

// Count-Up Function
function countUp(element, targetValue, duration) {
  let startValue = 0;
  let range = targetValue - startValue;
  let stepTime = Math.abs(Math.floor(duration / range));
  let current = startValue;

  element.style.visibility = "visible"; // Make the counter visible when animation starts

  let timer = setInterval(() => {
    current += 1;
    element.innerHTML = current + (element.dataset.suffix || ""); // Update the counter value
    if (current === targetValue) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Detect when the element is in the viewport
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".countup");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const targetValue = parseInt(counter.dataset.target);
          const duration = 2000; // Duration for the count-up (in milliseconds)

          countUp(counter, targetValue, duration);
          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});


