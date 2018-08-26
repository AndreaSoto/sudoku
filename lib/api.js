const Sudoku = require ('../lib/sudoku.js');

class Api {
    
    createBoard(){
            let sudoku  = new Sudoku;
            return sudoku.createBoard();
        }
    }

module.exports = Api;