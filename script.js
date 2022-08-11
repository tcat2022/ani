const myTimeout = setTimeout(myGreeting, 10000);

function myGreeting() {
  document.getElementById("container").style.display = "none"
}
const myTimeout2 = setTimeout(myGreeting2, 11000);

function myGreeting2() {
  document.getElementById("typer").style.display = "inherit"
}
const myTimeout1 = setTimeout(myGreeting1, 20000);

function myGreeting1() {
  document.getElementById("typer").style.display = "none"
}