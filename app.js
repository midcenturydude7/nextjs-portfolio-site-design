const wrapperElem = document.querySelector(".wrapper");
const wrapperAfter = window.getComputedStyle(wrapperElem, "::after");
const sectionBox = document.querySelector(".section-box");

console.log(wrapperAfter.animation);

sectionBox.addEventListener("mouseover", () => {
  console.log("mouseover!");
  wrapperElem.style.setProperty(
    "--slide-02",
    "slide-down 1s ease-in-out backwards"
  );
});

sectionBox.addEventListener("mouseout", () => {
  console.log("mouseout!");
  wrapperElem.style.setProperty(
    "--slide-02",
    "slide-up-bounce 1s ease-in forwards"
  );
});
