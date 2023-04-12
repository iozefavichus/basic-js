const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str ='';
  let count = '' ;
  str = str+n;
  let result=0;
  for(let i=0; i<str.length;i++){
    count = str.slice(0,i)+str.slice(i+1,str.length);
    if(count>result){
      result=count;
    }
  }
  return Number(result);
}

module.exports = {
  deleteDigit
};
