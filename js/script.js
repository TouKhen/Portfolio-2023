// cursor
let cursor = document.querySelector("#custom-cursor");

const positionElement = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  //   cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  cursor.style.top = `${mouseY - 35}px`;
  cursor.style.left = `${mouseX - 45}px`;
};

window.addEventListener("mousemove", positionElement);

// Menu

const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".primary-navigation");

menuToggle.addEventListener("click", () => {
  const isOpened = menuToggle.getAttribute("aria-expanded") === "true";
  isOpened ? closeMenu() : openMenu();
});

function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  siteNavigation.setAttribute("data-state", "opened");
}
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  siteNavigation.setAttribute("data-state", "closing");

  siteNavigation.addEventListener(
    "animationend",
    () => {
      siteNavigation.setAttribute("data-state", "closed");
    },
    { once: true }
  );
}
