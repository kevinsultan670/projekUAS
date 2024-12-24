function backtomenu() {
  window.location.href = "index.html"; // Arahkan ke halaman index.html
}

function gameOver() {
  Swal.fire({
    title: "Game Over!",
    text: `Your score: ${score}`,
    icon: "error",
    confirmButtonText: "Kembali",
  }).then(() => {
    backtomenu();
  });
}
