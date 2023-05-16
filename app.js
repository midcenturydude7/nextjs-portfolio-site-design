const wrapperElem = document.querySelector(".wrapper");
const sectionBox = document.querySelector(".section-box");
const sectionBoxTwo = document.querySelector(".section-box:nth-child(2)");
const footerElem = document.querySelector(".footer");

// Testing access to CSS variables | Pseudo element - wrapper::after
// const wrapperAfter = window.getComputedStyle(wrapperElem, "::after");

console.log(footerElem);

// BOX ONE: MOUSEOVER
sectionBox.addEventListener("pointerover", () => {
  wrapperElem.style.setProperty(
    "--slide-02",
    "slide-down 1s ease-in-out backwards"
  );
  footerElem.style.setProperty(
    "--slide-03",
    "slide-down-content 1s ease-in-out forwards"
  );
});

// BOX ONE: MOUSEOUT
sectionBox.addEventListener("pointerout", () => {
  wrapperElem.style.setProperty(
    "--slide-02",
    "slide-up-nobounce 1s ease-in forwards"
  );
  footerElem.style.setProperty(
    "--slide-03",
    "slide-up-content 1s ease-in forwards"
  );
});

// BOX TWO: MOUSEOVER
sectionBoxTwo.addEventListener("pointerover", () => {
  wrapperElem.style.setProperty(
    "--slide-02",
    "slide-down 1s ease-in-out backwards"
  );
  footerElem.style.setProperty(
    "--slide-03",
    "slide-down-content 1s ease-in-out forwards"
  );
});

// BOX TWO: MOUSEOUT
sectionBoxTwo.addEventListener("pointerout", () => {
  wrapperElem.style.setProperty(
    "--slide-02",
    "slide-up-nobounce 1s ease-in forwards"
  );
  footerElem.style.setProperty(
    "--slide-03",
    "slide-up-content 1s ease-in forwards"
  );
});
