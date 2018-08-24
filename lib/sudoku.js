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

        this.randomRow = [1,2,3,4,5,6,7,8,9];
        //pre-sets
        for(let i = 0 ; i < 9 ; i++){
            this.rows.push(new Set([1,2,3,4,5,6,7,8,9]));
            this.cols.push(new Set([1,2,3,4,5,6,7,8,9]));
            this.blocks.push(new Set([1,2,3,4,5,6,7,8,9]));
        }
    }
    random(){
        // for(let i = 0 ; i < 9 ; i++)
        //     this.randomRow.concat(new [Math.floor(Math.random() * 9)]);
        
        return this.randomRow = [5,3,4,2,1,6,8,7,9];
    }
    setNumber(number, rowIndex, colIndex){ 
        //Let's find our blockIndex
        let blockIndex = 0;
        if (rowIndex <= 2 && colIndex <= 2) blockIndex = 0;
        else if (rowIndex <= 2 && colIndex <= 5)  blockIndex = 1;
        else if (rowIndex <= 2 && colIndex <= 8) blockIndex = 2;

        else if (rowIndex <= 5 && colIndex <= 2) blockIndex = 3;
        else if (rowIndex <= 5 && colIndex <= 5) blockIndex = 4;
        else if (rowIndex <= 5 && colIndex <= 8) blockIndex = 5;

        else if (rowIndex <= 8 && colIndex <= 2) blockIndex = 6;
        else if (rowIndex <= 8 && colIndex <= 5) blockIndex = 7;
        else if (rowIndex <= 8 && colIndex <= 8) blockIndex = 8;

        if( this.rows[rowIndex].has(number) && this.cols[colIndex].has(number) && this.blocks[blockIndex].has(number) ){
            
            this.rows[rowIndex].delete(number);
            this.cols[colIndex].delete(number);
            this.blocks[blockIndex].delete(number);

            //add to object. Lets print it for now
            console.log('['+ rowIndex + ','+ colIndex+'] '+number +' row/col/block: ');
            // console.log(this.rows[rowIndex]);
            // console.log(this.cols[colIndex]);
            // console.log(this.blocks[blockIndex]);
            return; 
        }
        else{ 
            number =Math.floor(Math.random() * 9);
            console.log('number ran: ' + number); 
            return this.setNumber(number, rowIndex, colIndex);  
        }
        
        return;
        
    }

    // setNumber(number, rowIndex, colIndex){
    //     let blockIndex = 1;
    //     if (rowIndex <= 2 && colIndex <= 2) blockIndex = 1;
    //     else if (rowIndex <= 2 && colIndex <= 5)  blockIndex = 2;
    //     else if (rowIndex <= 2 && colIndex <= 8) blockIndex = 3;

    //     else if (rowIndex <= 5 && colIndex <= 2) blockIndex = 4;
    //     else if (rowIndex <= 5 && colIndex <= 5) blockIndex = 5;
    //     else if (rowIndex <= 5 && colIndex <= 8) blockIndex = 6;

    //     else if (rowIndex <= 8 && colIndex <= 2) blockIndex = 7;
    //     else if (rowIndex <= 8 && colIndex <= 5) blockIndex = 8;
    //     else if (rowIndex <= 8 && colIndex <= 8) blockIndex = 9;


    //     while (this.rows[rowIndex].size > 0){//endless
    //         if( this.rows[rowIndex].has(number) && this.cols[colIndex].has(number) && this.blocks[blockIndex].has(number) ){
                
    //                             this.rows[rowIndex].delete(number);
    //                             this.cols[colIndex].delete(number);
    //                             this.blocks[blockIndex].delete(number);
                
    //                             //add to object. Lets print it for now
    //                             console.log('['+ rowIndex + ','+ colIndex+'] '+ number +' row/col/block: ');
    //                             // console.log(this.rows[rowIndex]);
    //                             // console.log(this.cols[colIndex]);
    //                             // console.log(this.blocks[blockIndex]);
    //                             break;
    //         }
    //         number= Math.floor(Math.random() * 9);
    //         console.log('number ran: ' + number);         
            
    //     };
        
    // }

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

    createBoard(){ 
       
        for(let r = 0 ; r < 2 ; r++){
            for(let c = 0 ; c < 9 ; c++){
                this.setNumber(Math.floor(Math.random() * 9),r,c);
                //console.log(r);
            }; 
        };
    }
}

module.exports = Sudoku;
    
