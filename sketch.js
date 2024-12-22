let x = 670;
let y = 1440;
let z = 1440;

let colorX = 255;
let colorY = 255;
let colorZ = 255;
let answerOneValue = 0;
let answerTwoValue = 0;
let answerThreeValue = 0;

function answerOne(val) {
  answerOneValue = val;
  document.getElementById('answer1-value').innerHTML = val;

}
function answerTwo(val) {
  answerTwoValue = val;
  document.getElementById('answer2-value').innerHTML = val;
}
function answerThree(val) {
  answerThreeValue = val;
  document.getElementById('answer3-value').innerHTML = val;
}

function revealVisuals() {
  document.getElementById('question1').style.display = "none";
  document.getElementById('question2').style.display = "none";
  document.getElementById('question3').style.display = "none";
  document.getElementById('create').style.display = "none";
  document.getElementById('visualCanvas').style.display = "block";
  document.getElementById('print').style.display = "block";
  document.getElementById('back').style.display = "block";
  x = random(0, 240);
  y = random(720, 1440);
  z = random(720, 1440);
}

function printOut() {
  document.getElementById('heading').style.display = "none";
  document.getElementById('question1').style.display = "none";
  document.getElementById('question2').style.display = "none";
  document.getElementById('question3').style.display = "none";
  document.getElementById('print').style.display = "none";
  document.getElementById('visualCanvas').style.display = "block";
  document.getElementById('back').style.display = "block";
  document.getElementById('create').style.display = "none";
  window.print();
}

function setup() {

  let cvs = createCanvas(720, 720);
  cvs.id("visualCanvas");
  cvs.style("display", "none");
}


function answerOne() {

  colorX = int(document.getElementById('answer1').value);

}
function answerTwo() {

  colorY = int(document.getElementById('answer2').value);

}
function answerThree() {

  colorZ = int(document.getElementById('answer3').value);
}

function draw() {

  background(colorX, colorY, colorZ, 50);

  //base circle
  for (let i = x; i >= 0; i -= 100) {
    fill(colorX + 200, colorY + 200, colorZ + 200, 50);
    noStroke();
    circle(0, 0, 1440);
  }

  //strokes circle
  for (let i = y; i >= 0; i -= 200) {
    fill(i + 20, i + 10, i + 15, 50);
    strokeWeight(20);
    stroke(colorZ + i, colorX + i, colorY + i, 70);
    arc(0, 0, i, i, 50, 30, CHORD);
  }
  // thin stroke circle
  for (let i = z; i >= 0; i -= 400) {
    strokeWeight(5);
    stroke(colorY + 150, colorZ + 150, colorX + 100);
    arc(0, 0, i, i, 50, 30, CHORD);
  }

  console.log("x:" + colorX);
  console.log("y:" + colorY);
  console.log("z:" + colorZ);


}

