const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
}

function closeMenu() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

  var typed = new Typed(".text", {
    strings: ["Frontend Developer", "SQL Developer ", "Web Developer" ,"DataBase Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// Scroll Reveal Animation for Contact Page
const revealElements = document.querySelectorAll('.scroll-reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));
  
const cards = document.querySelectorAll('.edu-card');

const observers = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('reveal');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.2});

cards.forEach(card=>observers.observe(card));


