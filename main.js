let carbonCount = window.prompt("Write Carbon Count !");
let hydrogine = carbonCount * 2 + 2;
let carbonFigure = "";
let button = document.querySelector("button");
for (let i = 0; i < carbonCount; i++) {
  if (i == 0) {
    carbonFigure += "CH" + "<sub>3</sub>";
  } else if (i == carbonCount - 1) {
    carbonFigure += "-CH" + "<sub>3</sub>";
  } else {
    carbonFigure += "-CH" + "<sub>2</sub>";
  }
  if (carbonCount == 1) {
    carbonFigure = "CH" + "<sub>4</sub>";
  }
  if (carbonCount == 2) {
    carbonFigure = "CH" + "<sub>3</sub>" + "CH" + "<sub>3</sub>";
  }
  if (carbonCount > 10) {
    carbonFigure = "Don't Know Yet";
  }
}
document.write("<h1>" + carbonFigure + "</h1>")

button.onclick = function () {
  location.reload()
}
