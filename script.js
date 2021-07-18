document.addEventListener('DOMContentLoaded', () => {
    // create cells for game board
    const boardDimension = 20

    const gameBoard = document.querySelector('.main-board')
    for (let i = 0; i < boardDimension; i++) {
        const row = document.createElement('div')
        row.classList.add('main-board-row')
        for(let j = 0; j < boardDimension; j++) {
            const cell = document.createElement('div')
            cell.classList.add('main-board-cell')
            cell.setAttribute('row', i+1)
            cell.setAttribute('col', j+1)
            row.appendChild(cell)
        }
        gameBoard.appendChild(row)    
    }

    // display pieces
    const piecesDiv = document.querySelector('.main-side-pieces')

    // loop through all dimensions of pieces
    for(const dimension in pieces) {
        // loop through all different pieces in current dimension
        for(const piece in pieces[dimension]) {
            const pieceArray = pieces[dimension][piece]

            // div to store all cells in piece
            const pieceElement = document.createElement('div')
            pieceElement.classList.add('main-side-piece')

            // loop through arrays to create col/rows
            for(let i = 0; i < pieceArray.length; i++) {
                const pieceRowElement = document.createElement('div')
                pieceRowElement.classList.add('main-side-piece-row')

                //** TODO **//
                // check if piece array is one dimensional
                // skip double for loop and just add them to single row
                
                for(let j = 0; j < pieceArray[i].length; j++) {
                    const pieceCell = document.createElement('div')
                    pieceCell.classList.add('main-side-piece-cell')
                    pieceRowElement.appendChild(pieceCell)

                    //** TODO **//
                    // add current player and set all 1s to players color
                    // for now set background to orange
                    if(pieceArray[i][j] === 1) {
                        pieceCell.classList.add('orange')
                        pieceCell.classList.add('cellBorder')
                    }
                }
                pieceElement.appendChild(pieceRowElement)
            }
            piecesDiv.appendChild(pieceElement)
        }
    }
})