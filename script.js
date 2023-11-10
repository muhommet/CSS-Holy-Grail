function openNav() {
  // It calls the "classList.toggle()" method on the outerGrid variable.
  // This method toggles the presence of a class name in the element’s class attribute.
  // If the class name is present, it is removed; if it is absent, it is added.
  const outergrid = document.querySelector(".outergrid");
  outergrid.classList.toggle("outergrid-expanded");
  const nav = document.querySelector("nav");
  nav.classList.toggle("hide-nav");
}
