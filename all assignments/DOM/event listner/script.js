const preview = document.getElementById("main");
const second = document.getElementsByClassName("second");

for (let i = 0; i < second.length; i++) {
  second[i].addEventListener("mouseover", function () {
    preview.src = this.src;


});
}

