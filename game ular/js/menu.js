function startGame() {
  document.getElementById("mainMenu").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  initGame();
}

function continueGame() {
  Swal.fire({
    title: "Continue Game",
    text: "This feature is under construction!",
    icon: "info",
    confirmButtonText: "OK",
  });
}

function openOptions() {
  document.getElementById("mainMenu").style.display = "none";
  document.getElementById("optionsMenu").style.display = "block";
}

function backToMenu() {
  document.getElementById("optionsMenu").style.display = "none";
  document.getElementById("mainMenu").style.display = "block";
}
