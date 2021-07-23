class Cell {
    constructor(col, row, element) {
        this.col = col
        this.row = row
        this.occupiedBy = null
        this.element = element
        this.xPosition = 0
        this.yPosition = 0
    }

    occupy(color) {
        if(this.occupiedBy !== null) 
            throw "Can't occupy cell which is already occupied"
            
        this.occupiedBy = color
        this.element.classList.add('color')
    }

    isEmpty() {
        return this.occupiedBy === null
    }

    updateScreenSize() {

    }
}

// keep all cells from game board here for now
let cellCollection = []