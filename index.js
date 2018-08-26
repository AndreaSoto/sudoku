const express = require('express');
const Routes = require ('./routes.js');
const Sudoku = require ('./lib/sudoku.js');

let app = express();
let rt = new Routes;

app.get('/sudoku/board', rt.getBoard);

console.log('App: Ready! \nPort: 8080');
app.listen(8080);



