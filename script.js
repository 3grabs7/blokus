document.addEventListener('DOMContentLoaded', () => {
    const boardDimension = 20
    
    // create cells for game board
    const gameBoard = document.querySelector('.main-board')
    for (let i = 0; i < boardDimension; i++) {
        const row = document.createElement('div')
        row.classList.add('main-board-row')
        for(let j = 0; j < boardDimension; j++) {
            const cellElement = document.createElement('div')
            cellElement.classList.add('main-board-cell')
            cellElement.setAttribute('col', j+1)
            cellElement.setAttribute('row', i+1)
            row.appendChild(cellElement)

            const cell = new Cell(j+1, i+1, cellElement)
            cellCollection.push(cell)
        }
        gameBoard.appendChild(row)    
    }
    loadPieces(currentColor)
    startGame()
})