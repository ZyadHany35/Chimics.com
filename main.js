let carbonCount = window.prompt("Write Carbon Count !");
let hydrogine = carbonCount * 2 + 2;
let carbonFigure = "";

for (let i = 0; i < carbonCount; i++) {
  if (i == 0) {
    carbonFigure += "CH" + 3;
  } else if (i == carbonCount - 1) {
    carbonFigure += "-CH" + 3;
  } else {
    carbonFigure += "-CH" + 2;
  }
  if (carbonCount == 1) {
    carbonFigure = "CH4"
  }
  if (carbonCount == 2) {
    carbonFigure = "CH3-CH3"
  }
  if (carbonCount > 10) {
    carbonFigure = "Don't Know Yet"
  }
}
document.write(carbonFigure)