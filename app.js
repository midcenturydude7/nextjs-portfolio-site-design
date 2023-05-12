const wrapperAfter = document.querySelector(".wrapper");
const sectionBox = document.querySelector(".section-box");

sectionBox.addEventListener("mouseover", () => {
  console.log("mouseover!");
  wrapperAfter.style.setProperty("--slide-02", "slide-01");
});
