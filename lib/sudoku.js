var _ = require('underscore');
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
class Sudoku{

    constructor(){
        this.random = Math.floor(Math.random() * 9 +1); //* 9 = 0-8; +1 = 1-9
    }
    
    createBoard(){
        let board = _.range(81);
        let number =this.random;
        //Uses a technique where:
        //second row starts from 4th number and continues on ++
        //third row start from 7th number and continues on++
        //4th row repeats first row but starting at + 1. Same rule for 5th and 6th
        //7th row uses 5th row but starting at +1 and so on.
        board.forEach((element, i) => {
            switch(i){
                case 0: number; break;
                case 9: number = board[3]; break;
                case 18: number = board[6]; break;

                case 27: number = (board[0] == 9)? 1: board[0] +1; break;
                case 36: number = (board[3] == 9)? 1: board[3] +1; break;
                case 45: number = (board[6] == 9)? 1: board[6] +1; break;

                case 54: number = (board[36] == 9)? 1: board[36] +1; break;
                case 63: number = (board[45] == 9)? 1: board[45] +1; break;
                case 72: number = (board[27] == 9)? 1: board[27] +1; break;
            };
            
            board[i] = number;
            //console.log('i:'+ i + ', number: '+number);
            number++;
            if (number == 10) number = 1;
        })

        return board;

    }

    boardToJSON(){
        let boardArray = this.createBoard();
        let boardJSON = {
            board: []
        };
        for(let i in boardArray) {  
            boardJSON.board.push(boardArray[i]);
        }
        return boardJSON;

    }
}

module.exports = Sudoku;