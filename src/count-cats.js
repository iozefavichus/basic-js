const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

  function countCats(countCatsmat) {
    // throw new NotImplementedError('Not implemented');
     let result=0;
      for(let i=0;i<countCatsmat.length; i++){
        let Array = countCatsmat[i];
        for(let j=0;j<Array.length;j++ ){
          if(Array[j]=='^^'){
            result=result+1;
            }
          }
        }
     return result;
     }


module.exports = {
  countCats
};
