const wrapperElem = document.querySelector(".wrapper");
const sectionBox = document.querySelector(".section-box");
const sectionBoxTwo = document.querySelector(".section-box:nth-child(2)");

// Testing access to CSS variables | Pseudo element - wrapper::after
// const wrapperAfter = window.getComputedStyle(wrapperElem, "::after");

console.log(sectionBoxTwo);

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

sectionBoxTwo.addEventListener("mouseover", () => {
  console.log("mouseover!");
  wrapperElem.style.setProperty(
    "--slide-02",
    "slide-down 1s ease-in-out backwards"
  );
});

sectionBoxTwo.addEventListener("mouseout", () => {
  console.log("mouseout!");
  wrapperElem.style.setProperty(
    "--slide-02",
    "slide-up-bounce 1s ease-in forwards"
  );
});
