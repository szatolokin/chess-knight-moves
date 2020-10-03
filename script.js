window.onload = event => {
  const chessBoard = document.querySelector(".chess-board");

  chessBoardInit();
  chessBoardSizeUpdate();

  window.onresize = () => {
    chessBoardSizeUpdate();
  };
  
  function chessBoardInit() {
    console.log(123)
    for (let i = 0; i < 64; i++) {
      const chessCell = document.createElement('div')
      chessCell.dataset.index = i
      chessCell.classList.add('chess-cell', isBlackChessCell(i) ? 'black' : 'white')
      chessBoard.append(chessCell)
    }
  }

  function chessBoardSizeUpdate() {
    const bodyPadding = cutPx(getComputedStyle(document.body).padding);
    const bodyWidth = cutPx(getComputedStyle(document.body).width);
    const bodyHeight = cutPx(getComputedStyle(document.body).height);

    const newSize = Math.min(bodyWidth, bodyHeight) - bodyPadding * 2;
    chessBoard.style.width = newSize + "px";
    chessBoard.style.height = newSize + "px";
  }
};

function cutPx(str) {
  return +str.substr(0, str.length - 2);
}

function isBlackChessCell(index) {
  return (
    Math.floor(index / 8) % 2 && (index + 1) % 2 
    ||
    Math.floor((index / 8) + 1) % 2 && index % 2
  )
}
