const Sudoku = require ('../lib/sudoku.js');

class Api {
    
    createBoard(){
            let sudoku  = new Sudoku;
            return sudoku.boardToJSON();
        }
    }

module.exports = Api;