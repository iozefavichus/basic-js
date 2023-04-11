const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(ArrayNew) {
  function ArTrue(Arr){
    if(Array.isArray(Arr)){
      return true
      }
      else{
        return false
        }
    }
  if( ArTrue(ArrayNew))  {

    let result='';
    let newArray=[];
    for(let i=0; i<ArrayNew.length; i++){
      let name = ArrayNew[i];
      if(typeof(name)=='string'){
        let namewithoutspace = name.trim();
        newArray.push(namewithoutspace[0].toUpperCase());
        }
      }
    let ResultArray = newArray.sort();
    result = ResultArray.join('');
    return result;
  }
  else{
    return false;
  }
  }

module.exports = {
  createDreamTeam
};
