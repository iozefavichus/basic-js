const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
    } 
  let mes1 = '--discard-next';
  let mes2 = '--discard-prev';
  let mes3 = '--double-next';
  let mes4 = '--double-prev'; 
  let ResultArr = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] == mes1){
      if(i == arr.length-1){
        }
      else{
        i=i+1;
        }  
      }
    else if(arr[i]==mes2){
      if(i==0){
        }
      else if((arr[i-2] == mes1)){
        }  
      else{
        ResultArr.pop();
        }  
      }
    else if(arr[i]==mes3){
      if(i == arr.length-1){
        }
      else{
        ResultArr.push(arr[i+1]);
        }  
      }
    else if(arr[i]==mes4){
      if(i==0){
        }
      else if((arr[i-2] == mes1)){
        }
      else{
          ResultArr.push(arr[i-1]);
        }

      }
    else if((arr[i]!=mes1)&&(arr[i]!=mes2)&&(arr[i]!=mes3)&&(arr[i]!=mes4)){
      ResultArr.push(arr[i])
      }
    }

  return ResultArr;

}

module.exports = {
  transform
};
