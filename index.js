const express = require('express');
const Routes = require ('./routes.js');
const Sudoku = require ('./lib/sudoku.js');

let app = express();
let rt = new Routes;

app.get('/sudoku/board', rt.getBoard);

console.log('App: Ready! \nPort: 8084');
app.listen(8084);

let sudoku  = new Sudoku;
sudoku.createBoard();


module.exports = {
	makepuzzle  : function () { return makepuzzle(solvepuzzle(makeArray(81, null))); }
};