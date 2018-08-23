class Sudoku{

        /*
        
        blocks 1.....9
        _________________________
        |       |       |       | rows
        |    1  |   2   |  3    |
        |_______|_______|_______|
        |       |       |       |
        |    4  |   5   |  6    |
        |_______|_______|_______|
        |       |       |       |
        |    7  |   8   |  9    |
        |_______|_______|_______|
                            c
                            o
                            l
                            s
        */

    constructor(){
        this.rows = [];
        this.cols = [];
        this.blocks = [];

        for(let i = 0 ; i < 9 ; i++){
            this.rows.push(new Set([1,2,3,4,5,6,7,8,9]));
            this.cols.push(new Set([1,2,3,4,5,6,7,8,9]));
            this.blocks.push(new Set([1,2,3,4,5,6,7,8,9]));
        }
    }

    randomNumber(){
        return Math.floor(Math.random() * 9 + 1);
    }

    getRow(index){
        return this.rows[index];
    }

    getCol(index){
        return this.cols[index];
    }

    getBlock(index){
        return this.blocks[index];
    }

    checkNumber(row, col, block){
        console.log(row);
        console.log(col);
        console.log(block);
    }

    setNumber(row, col, block){

    }
    
    findBlockIndex(r,c){
        let blockIndex;
        if (r <= 2 && c <= 2) blockIndex = 1;
        else if (r <= 2 && c <= 5)  blockIndex = 2;
        else if (r <= 2 && c <= 8) blockIndex = 3;

        else if (r <= 5 && c <= 2) blockIndex = 4;
        else if (r <= 5 && c <= 5) blockIndex = 5;
        else if (r <= 5 && c <= 8) blockIndex = 6;

        else if (r <= 8 && c <= 2) blockIndex = 7;
        else if (r <= 8 && c <= 5) blockIndex = 8;
        else if (r <= 8 && c <= 8) blockIndex = 9;


        //console.log( r +','+ c + '= ' + b);
        return blockIndex;
    }
}

module.exports = Sudoku;