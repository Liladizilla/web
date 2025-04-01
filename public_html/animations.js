// Hide Boot Screen after Animation
setTimeout(() => {
    document.querySelector('.boot-screen').style.display = 'none';
    document.querySelector('.main-container').style.display = 'flex';
}, 3000);

// Ensure buttons are visible when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.main-container').style.display = 'flex';
})
// Ensure page loads correctly
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector('.boot-screen').style.display = 'none';
        document.querySelector('.main-container').style.display = 'flex';
    }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    function revealElements() {
      const reveals = document.querySelectorAll(".reveal");
  
      reveals.forEach((element) => {
        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;
        let revealPoint = 100;
  
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    }
  
    window.addEventListener("scroll", revealElements);
    revealElements(); // Run once on page load
  });