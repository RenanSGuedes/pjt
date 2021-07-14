

function classToggle() {
  this.classList.toggle('fa-toggle-off');
  this.classList.toggle('fa-toggle-on');
}

var save1 = document.querySelector('.save-1 i.fas')


save1.addEventListener('click', classToggle);

document.getElementById('bg').style.backgroundColor = "#ff5f5f"

function toggleState1() {
  var x = document.getElementById("save1");
  var y = document.getElementById("bg");
  if (x.innerHTML === "Desligado") {
    x.innerHTML = "Ligado";
    y.style.backgroundColor = "rgb(82, 222, 0)"
  } else {
    x.innerHTML = "Desligado";
    y.style.backgroundColor = "#ff5f5f"
  }
}

