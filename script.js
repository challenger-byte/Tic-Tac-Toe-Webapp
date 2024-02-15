let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function cellClicked(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    document.getElementById('gameBoard').children[Math.floor(index / 3)].children[index % 3].innerText = currentPlayer;
    if (checkWinner()) {
      alert(`${currentPlayer} wins!`);
      resetGame();
    } else if (board.every(cell => cell !== '')) {
      alert("It's a draw!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let condition of winningConditions) {
    let [a, b, c] = condition;
    if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
