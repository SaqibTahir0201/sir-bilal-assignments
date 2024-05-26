let text = document.getElementById("text");
let heading = document.getElementById("heading");
let headingFamily = document.getElementById("headingFamily");
let headFontSize = document.getElementById("headFontSize");
let btns = document.getElementsByClassName("action_btn");
let fontOptions = document.getElementById("fontFamily");
let paraFontSize = document.getElementById("paraFontSize");

headingFamily.addEventListener("change", function () {
  if (this.value === "Protest-Revolution") {
    heading.style.fontFamily = "Protest Revolution";
  } else if (this.value === "one-piece") {
    heading.style.fontFamily = "one-piece";
  }
});

headFontSize.addEventListener("change", function () {
  if (this.value === "25") {
    heading.style.fontSize = "25px";
  } else if (this.value === "30") {
    heading.style.fontSize = "30px";
  } else if (this.value === "40") {
    heading.style.fontSize = "40px";
  } else if (this.value === "45") {
    heading.style.fontSize = "45px";
  } else if (this.value === "50") {
    heading.style.fontSize = "50px";
  } else if (this.value === "55") {
    heading.style.fontSize = "55px";
  } else if (this.value === "60") {
    heading.style.fontSize = "60px";
  }
});
paraFontSize.addEventListener("change", function () {
  if (this.value === "small") {
    text.style.fontSize = "14px";
  } else if (this.value === "medium") {
    text.style.fontSize = "16px";
  } else if (this.value === "large") {
    text.style.fontSize = "18px";
  }
});

fontOptions.addEventListener("change", function () {
  if (this.value === "monospace") {
    text.style.fontFamily = "monospace";
  } else if (this.value === "sans-serif") {
    text.style.fontFamily = "sans-serif";
  } else if (this.value === "Arial") {
    text.style.fontFamily = "Arial";
  } else if (this.value === "serif") {
    text.style.fontFamily = "serif";
  }
});

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    switch (this.innerText) {
      case "Bold":
        text.style.fontWeight =
          text.style.fontWeight === "bold" ? "normal" : "bold";
        heading.style.fontWeight =
          heading.style.fontWeight === "bold" ? "normal" : "bold";
        break;
      case "Italic":
        text.style.fontStyle =
          text.style.fontStyle === "italic" ? "normal" : "italic";
        heading.style.fontStyle =
          heading.style.fontStyle === "italic" ? "normal" : "italic";
        break;
      case "Underline":
        text.style.textDecoration =
          text.style.textDecoration === "underline" ? "none" : "underline";
        heading.style.textDecoration =
          heading.style.textDecoration === "underline" ? "none" : "underline";
        break;
      case "Right":
        text.style.textAlign =
          text.style.textAlign === "right" ? "initial" : "right";
        heading.style.textAlign =
          heading.style.textAlign === "right" ? "initial" : "right";
        break;
      case "Left":
        text.style.textAlign =
          text.style.textAlign === "left" ? "initial" : "left";
        heading.style.textAlign =
          heading.style.textAlign === "left" ? "initial" : "left";
        break;
      case "Center":
        text.style.textAlign =
          text.style.textAlign === "center" ? "initial" : "center";
        heading.style.textAlign =
          heading.style.textAlign === "center" ? "initial" : "center";
        break;
      case "Justify":
        text.style.textAlign =
          text.style.textAlign === "justify" ? "initial" : "justify";
        heading.style.textAlign =
          heading.style.textAlign === "justify" ? "initial" : "justify";
        break;
    }
  });
}
