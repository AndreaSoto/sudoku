const Sudoku = require ('../lib/sudoku.js');
const async = require('async');
const lupus = require('lupus');

class Api {
    
    createBoard(){
            let sudoku  = new Sudoku;
            return sudoku.createBoard();
        }
    }

module.exports = Api;