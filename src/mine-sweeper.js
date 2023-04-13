const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix){
  let arr = new Array();
  for(var i=0; i<matrix.length; i++){
    let part =matrix[i];
    arr[i] = new Array();
    for(var j=0; j<part.length; j++){
      arr[i][j] = 0;
      
      if(i!=matrix.length-1){
        if(matrix[i+1][j] == true){
        arr[i][j] += 1;
        }
        }
        
      if(j!=part.length-1){
      if(matrix[i][j+1] == true){
        arr[i][j] += 1;
        }
      }
      
      if((j!=part.length-1)&&(i!=matrix.length-1)){
      if(matrix[i+1][j+1] == true){
        arr[i][j] += 1;
        } 
      }
      
      if(i!=0){
        if(matrix[i-1][j] == true){
        arr[i][j] += 1;
        }
      }
      
      if((j!=part.length-1)&&(i!=0)){
        if(matrix[i-1][j+1] == true){
        arr[i][j] += 1;
        }
      }
      
      if((i!=0)&&(j!=0)){
        if(matrix[i-1][j-1] == true){
        arr[i][j] += 1;
        }
      }
      
      if(j!=0){
        if((matrix[i][j-1] == true)&&(j!=0)){
        arr[i][j] += 1;
        }
      }
      
      if((i!=matrix.length-1)&&(j!=0)){
        if(matrix[i+1][j-1] == true){
        arr[i][j] += 1;
        }
      }
        
    }
  }
  return arr;
}

module.exports = {
  minesweeper
};
