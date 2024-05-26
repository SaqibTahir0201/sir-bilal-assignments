const tools = document.querySelectorAll(".tools");

for (let i = 0; i < tools.length; i++) {
  tools[i].addEventListener("click", function () {
    clearColor();
    this.style.color = "#fff";
    style(this);
  });
}

function clearColor() {
  for (let i = 0; i < tools.length; i++) {
    tools[i].style.color = "#000";
  }
}
function style(tool) {
  const h1 = document.getElementById("h1");
  h1.style.fontWeight = "";
  h1.style.textDecoration = "";
  h1.style.fontStyle = "";

  if (tool === tools[0]) {
    h1.style.fontWeight = "bold";
    console.log("bold");
  } else if (tool === tools[1]) {
    h1.style.textDecoration = "underline";
    console.log("underline");
  } else if (tool === tools[2]) {
    h1.style.fontStyle = "italic";
    console.log("italic");
  } else if (tool === tools[3]) {
    h1.style.fontFamily = "sans-serif";
  }
}
