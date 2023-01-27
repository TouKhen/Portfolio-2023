// About me will appear from the left on scroll
gsap.from(".about-me", 1, {
  scrollTrigger: {
    trigger: ".about-me",
    start: "top center",
  },
  ease: "power2.out",
  x: "-200%",
  opacity: 0,
});

// On scrolltrigger show every skills from the "about me" section
gsap.from(".about-me .skill-list li", 1, {
  scrollTrigger: {
    trigger: ".about-me .skill-list li",
    start: "top bottom",
  },
  scale: 0,
  stagger: {
    each: 0.3,
    from: "top",
  },
  duration: 2.5,
  delay: 0.6,
  ease: "elastic.out(1, 0.5)",
});

// Projet section will appear from the left on scroll
gsap.from(".projects", 1, {
  scrollTrigger: {
    trigger: ".projects",
    start: "top center",
  },
  ease: "power2.out",
  x: "-200%",
  opacity: 0,
});

// Formations section will appear from the left on scroll
gsap.from(".formations", 1, {
  scrollTrigger: {
    trigger: ".formations",
    start: "top center",
  },
  ease: "power2.out",
  x: "-200%",
  opacity: 0,
});

// blobs

// let blob1 = document.querySelector(".blob-1");
// let b1x = -500;
// let b1y = -500;

// console.log(document.body.offsetHeight);

// function loop() {
//   b1y++;
//   b1x++;
//   blob1.style.top = b1y + "px";
//   blob1.style.left = b1x + "px";

//   if (b1y > document.body.offsetHeight) b1y = -500;
//   if (b1x > document.body.offsetWidth) b1x = -500;

//   requestAnimationFrame(loop);
// }

// loop();

// Trail

// dots is an array of Dot objects,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
let dots = [],
  mouse = {
    x: 0,
    y: 0,
  };

// The Dot object used to scaffold the dots
let Dot = function () {
  this.x = 0;
  this.y = 0;
  this.node = (function () {
    let n = document.createElement("div");
    n.className = "trail";
    document.body.appendChild(n);
    return n;
  })();
};
// The Dot.prototype.draw() method sets the position of
// the object's <div> node
Dot.prototype.draw = function () {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

// Creates the Dot objects, populates the dots array
for (let i = 0; i < 12; i++) {
  let d = new Dot();
  dots.push(d);
}

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
  // draw() is called.
  let x = mouse.x,
    y = mouse.y;

  // This loop is where all the 90s magic happens
  dots.forEach(function (dot, index, dots) {
    let nextDot = dots[index + 1] || dots[0];

    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * 0.6;
    y += (nextDot.y - dot.y) * 0.6;
  });
}

addEventListener("mousemove", function (event) {
  //event.preventDefault();
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

// animate() calls draw() then recursively calls itself
// everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();
