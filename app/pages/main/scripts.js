

function classToggle() {
  this.classList.toggle('fa-toggle-off');
  this.classList.toggle('fa-toggle-on');
}

var airTemperature1 = document.querySelector('.air-temperature-1 i.fas')
var airTemperature2 = document.querySelector('.air-temperature-2 i.fas')
var airTemperature3 = document.querySelector('.air-temperature-3 i.fas')

airTemperature1.addEventListener('click', classToggle);
airTemperature2.addEventListener('click', classToggle);
airTemperature3.addEventListener('click', classToggle);

document.getElementById('bg1').style.backgroundColor = "#ff5f5f",
document.getElementById('bg2').style.backgroundColor = "#ff5f5f"
document.getElementById('bg3').style.backgroundColor = "#ff5f5f"

function toggleState1() {
  var x = document.getElementById("pump-status1");
  var y = document.getElementById("bg1");
  if (x.innerHTML === "Desligado") {
    x.innerHTML = "Ligado";
    y.style.backgroundColor = "rgb(82, 222, 0)"
  } else {
    x.innerHTML = "Desligado";
    y.style.backgroundColor = "#ff5f5f"
  }
}

function toggleState2() {
  var x = document.getElementById("pump-status2");
  var y = document.getElementById("bg2");
  if (x.innerHTML === "Desligado") {
    x.innerHTML = "Ligado";
    y.style.backgroundColor = "rgb(82, 222, 0)"
  } else {
    x.innerHTML = "Desligado";
    y.style.backgroundColor = "#ff5f5f"
  }
}

function toggleState3() {
  var x = document.getElementById("pump-status3");
  var y = document.getElementById("bg3");
  if (x.innerHTML === "Desligado") {
    x.innerHTML = "Ligado";
    y.style.backgroundColor = "rgb(82, 222, 0)"
  } else {
    x.innerHTML = "Desligado";
    y.style.backgroundColor = "#ff5f5f"
  }
}

var login = document.getElementById("login")
var pass = document.getElementById("pass")
var form = document.getElementById("auth-form")

var divMyForm = document.querySelector("div.myForm")
var divWrapper = document.querySelector("div.wrapper")

divWrapper.style.display = "none"

function done() {
  if (login.value == "estufa" && pass.value == "feagrilhi") {
    divMyForm.style.display = "none"
    divWrapper.style.display = "block"

    form.reset()
  } else {
    alert("Senha e/ou login incorretos")
  }
}