document.addEventListener('DOMContentLoaded', () => {
    const boardDimension = 20
    console.log('heheheh')
    // create cells for game board
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

})