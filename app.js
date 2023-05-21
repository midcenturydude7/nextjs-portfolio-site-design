const wrapperElem = document.querySelector(".wrapper");
const sectionBox = document.querySelector(".section-box_container");
const sectionBoxTwo = document.querySelector(".section-box:nth-child(2)");
const footerElem = document.querySelector(".footer");

// Testing access to CSS variables | Pseudo element - wrapper::after
// const wrapperAfter = window.getComputedStyle(wrapperElem, "::after");

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

// TERMINAL WINDOW TEXT
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ["#fff"];
  let visible = true;
  const consoleText = document.getElementById("console-text");
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  const target = document.getElementById(id);
  target.setAttribute("style", "color:" + colors[0]);

  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(function () {
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute("style", "color:" + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);

  window.setInterval(function () {
    if (visible === true) {
      consoleText.className = "console-underscore hidden";
      visible = false;
    } else {
      consoleText.className = "console-underscore";

      visible = true;
    }
  }, 200);
}

consoleText(
  [
    "I build things for the web.",
    "I'm a self-taught, frontend developer...",
    "specializing in building web sites and...",
    "web applications using Next.js and React.",
    "TL;DR? Check out my featured projects below...",
  ],
  "text",
  ["#00ccff", "#00ccff"]
);
