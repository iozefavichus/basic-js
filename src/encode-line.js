const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result='';
  for(let i=0; i<str.length;i++){
    let count=1;
    let sign = str[i];
    if(sign == str[i-1]){
      
      }
    else{
      for(let j=i+1; j<str.length;j++){
        if(sign==str[j]){
          count+=1;
        }
        if(sign!=str[j]){
          break}
      }
      
      
    if(count!=1){
      result=result+`${count}`+ sign;
      }
    if(count==1){
      result=result+ sign;
      }
    
    }
      }  
    
  return result;
}

module.exports = {
  encodeLine
};
