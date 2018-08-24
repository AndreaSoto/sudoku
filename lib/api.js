const Sudoku = require ('../lib/sudoku.js');
const async = require('async');
const lupus = require('lupus');

class Api {
    
        getBoard(){
            
        }
        // getBoard(){
        //     let sudoku  = new Sudoku;
        //     let test = function (r,c){
        //         console.log('a');//sudoku.setNumber(Math.floor(Math.random() * 9),r,c);
        //     };
        //     for(let r = 0 ; r < 9 ; r++){
        //         for(let c = 0 ; c < 9 ; c++){
        //             setInterval(()=>{
        //                 //console.log('aaaa');
        //                 sudoku.setNumber(Math.floor(Math.random() * 9),r,c);
        //             },1000);
        //         };
        //     };
        //     return "test";
        // };

        // getBoard(){
        //     let sudoku  = new Sudoku;
        //     let function1 = function(){
        //         lupus(0, 3, function(r) {
        //             //console.log("We're on n:", r);
        //                 lupus(0, 9, function(c) {
        //                     console.log(r+','+c);
        //                     sudoku.setNumber(Math.floor(Math.random() * 9),r,c);
        //                 }, function() {
        //                     //console.log('All done c!'); 
        //                 });
        //           }, function() {
        //             //console.log('All done r!');
        //           });
        //     };
        //     let function2 = function(){
        //         lupus(3, 6, function(r) {
        //             //console.log("We're on n:", r);
        //                 lupus(0, 9, function(c) {
        //                     console.log(r+','+c);
        //                     sudoku.setNumber(Math.floor(Math.random() * 9),r,c);
        //                 }, function() {
        //                     //console.log('All done c!'); 
        //                 });
        //           }, function() {
        //             //console.log('All done r!');
        //           });
        //     };
          
        //     setTimeout(function1, 5000);
        //     setTimeout(function2, 5000);
        // };

        // getBoard(){
        //     let sudoku  = new Sudoku;
            
        //     var r = 0;
        //     var c = 0;
        //     async.forever(
        //       function(next) {
        //         console.log('hi:', i);
        //             async.forever(
        //                 function(next) {
        //                     sudoku.setNumber(Math.floor(Math.random() * 9),r,c)
        //                 if (c == 9) c = 0; break
        //                 c++;                
        //                 next();
        //                 }
        //             );
        //         r++;                
        //         next();
        //       },
        //       function(err) {
        //         console.log('All done!');
        //       }
        //     );
            
        // };

        

        
    };
    
module.exports = Api;
//   var myCallback = function(err, data) {
//     if (err) throw err; // Check for the error and throw if it exists.
//     console.log('got data: '+data); // Otherwise proceed as usual.
//   };
  
//   var usingItNow = function(callback) {
//     callback(null, 'get it?'); // I dont want to throw an error, so I pass null for the error argument
//   };
//   usingItNow(myCallback);
//   //got data: get it?