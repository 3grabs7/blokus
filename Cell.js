class Cell {
    constructor(col, row) {
        this.col = col
        this.row = row
        this.occupiedBy = null
        this.element = document.querySelector('') // add reference to dom element
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
}