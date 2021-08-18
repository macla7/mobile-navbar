function hamburgerToggle() {
  const hamMenu = document.querySelectorAll(".ham-menu");
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn === hamMenu[0]) {
        hamMenu[0].firstElementChild.classList.remove("hide");
      } else {
        hamMenu[0].firstElementChild.classList.add("hide");
      }
    });
  });
}

function deactiveNav(navItems) {
  navItems.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function activeNavToggle() {
  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      deactiveNav(navItems);
      btn.classList.toggle("active");
    });
  });
}

export { hamburgerToggle, activeNavToggle };
