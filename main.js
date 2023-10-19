const left = document.querySelector('.left');
const right = document.querySelector('.right');
const middle = document.querySelector('.middle');
const container = document.querySelector('.container');
const intro = document.querySelector('.intro');
// let nav = document.querySelector("nav");
// let lefttrial= document.getElementById("lefttrial");
// let righttrial= document.getElementById("righttrial");

// const faders = document.querySelectorAll(".fade-in");

// window.addEventListener("scroll", (e) => {
//     let value = window.scrollY;
//     lefttrial.style.right = value * 0.1 + "px";
//     righttrial.style.left = value * 0.1 + "px";
//   });

document.getElementById("WelcomeButton").addEventListener('click', (e) => {
    setTimeout(() => {
        intro.classList.add('display-none');
    }, 100);
})

// window.addEventListener("scroll", function () {
//     let value = window.scrollY;
//     nav.style.top = value * 0.5 + "px";
// })

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});

middle.addEventListener('mouseenter', () => {
    container.classList.add('hover-middle');
});

middle.addEventListener('mouseleave', () => {
    container.classList.remove('hover-middle');
});

// const appearOptions = {
//     threshold: 1,
//     // rootMargin: "0px 0px 0px 0px"
// };

// const appearOnScroll = new IntersectionObserver(function(
//     entries,
//     appearOnScroll
//   ) {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) {
//         return;
//       } else {
//         entry.target.classList.add("appear");
//         appearOnScroll.unobserve(entry.target);
//       }
//     });
//   },
//   appearOptions);
  
//   faders.forEach(fader => {
//     appearOnScroll.observe(fader);
//   });
