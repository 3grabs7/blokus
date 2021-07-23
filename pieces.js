let currentPiece = null;

// display pieces
function loadPieces(color) {
  const piecesDiv = document.querySelector(".main-side-pieces");

  // loop through all dimensions of pieces
  for (const dimension in pieces) {
    // loop through all different pieces in current dimension
    for (const piece in pieces[dimension]) {
      const pieceArray = pieces[dimension][piece];

      // div to store all cells in piece
      const pieceElement = document.createElement("div");
      pieceElement.classList.add("main-side-piece");

      // loop through arrays to create col/rows
      if (pieceArray[0].length !== undefined) {
        for (let i = 0; i < pieceArray.length; i++) {
          const pieceRowElement = document.createElement("div");
          pieceRowElement.classList.add("main-side-piece-row");

          for (let j = 0; j < pieceArray[i].length; j++) {
            const pieceCell = document.createElement("div");
            pieceCell.classList.add("main-side-piece-cell");
            pieceRowElement.appendChild(pieceCell);

            if (pieceArray[i][j] === 1) {
              pieceCell.classList.add(currentColor);
              pieceCell.classList.add("cellBorder");
            }
          }
          pieceElement.appendChild(pieceRowElement);
        }

        // Add mouse drag event
        pieceElement.onmousedown = function(event) {
          // (1) prepare to moving: make absolute and on top by z-index
          pieceElement.style.position = 'absolute';
          pieceElement.style.zIndex = 1000;
        
          // move it out of any current parents directly into body
          // to make it positioned relative to the body
          document.body.append(pieceElement);
        
          // centers the ball at (pageX, pageY) coordinates
          function moveAt(pageX, pageY) {
            pieceElement.style.left = pageX - pieceElement.offsetWidth / 2 + 'px';
            pieceElement.style.top = pageY - pieceElement.offsetHeight / 2 + 'px';
          }
        
          // move our absolutely positioned ball under the pointer
          moveAt(event.pageX, event.pageY);
        
          function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
          }
        
          // (2) move the ball on mousemove
          document.addEventListener('mousemove', onMouseMove);
        
          // (3) drop the ball, remove unneeded handlers
          pieceElement.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            pieceElement.onmouseup = null;
          };
        
        };

        piecesDiv.appendChild(pieceElement);
      } else {
        const pieceRowElement = document.createElement("div");
        pieceRowElement.classList.add("main-side-piece-row");

        for (let i = 0; i < pieceArray.length; i++) {
          const pieceCell = document.createElement("div");
          pieceCell.classList.add("main-side-piece-cell");
          pieceRowElement.appendChild(pieceCell);

          if (pieceArray[i] === 1) {
            pieceCell.classList.add(currentColor);
            pieceCell.classList.add("cellBorder");
          }
        }
        pieceElement.appendChild(pieceRowElement);

        // Add mouse drag event

        piecesDiv.appendChild(pieceElement);
      }
    }
  }
}

const pieces = {
  mono: [[1]],

  domino: [
    [
      [0, 0],
      [1, 1],
    ],
    [
      [0, 1],
      [1, 1],
    ],
    [
      [1, 1],
      [1, 1],
    ],
  ],

  tromino: [
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    [
      [0, 0, 1],
      [1, 1, 1],
    ],
    [
      [0, 0, 1],
      [0, 0, 1],
      [1, 1, 1],
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [0, 0, 1],
      [1, 1, 1],
      [1, 0, 0],
    ],
    [
      [0, 1, 1],
      [1, 1, 0],
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 1],
    ],
    [
      [0, 1, 1],
      [1, 1, 0],
      [1, 0, 0],
    ],
    [
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 0],
    ],
    [
      [1, 1, 0],
      [1, 0, 0],
      [1, 1, 0],
    ],

    [
      [0, 1, 1],
      [1, 1, 0],
      [0, 1, 0],
    ],
  ],

  tetromino: [
    [1, 1, 1, 1],
    [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
    ],
    [
      [0, 1, 1, 1],
      [1, 1, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 1, 1],
    ],
  ],

  pentomino: [[1, 1, 1, 1, 1]],
};
