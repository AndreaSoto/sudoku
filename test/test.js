const Sudoku = require ('../lib/sudoku.js');
var assert = require('assert');

describe('Board', function() {
  describe('Check Numbers', function() {
    it('Are they between 1 -9 ?', function() {
      let sudoku = new Sudoku;
      board = sudoku.createBoard();
      assert(!board.includes(10));
    });
  });
});