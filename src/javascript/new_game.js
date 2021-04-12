function newGame() {
     document.location.reload(window);
}

export default function restartGame() {
     const restart = document.getElementById('restart');
     restart.addEventListener('click', newGame);
}