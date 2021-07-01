const modal = document.getElementById("modal-search");
const btn = document.getElementById("btn-search");
const span = document.getElementsByClassName("btn-close")[0];

// eslint-disable-next-line func-names
btn.onclick = function() {
  modal.style.display = "block";
}

// eslint-disable-next-line func-names
span.onclick = function() {
  modal.style.display = "none";
}

// eslint-disable-next-line func-names
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
