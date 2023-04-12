const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(str, key) {
    if((str === undefined)||(key === undefined)){
      throw new Error('Incorrect arguments!');
    }
    const alp = "abcdefghijklmnopqrstuvwxyz";
    const num = {};
    let strnew = str.toLowerCase();
    let keynew = key.toLowerCase();

    for(let i = 0; i < alp.length; i++){
          num[alp[i]] = i
        }

      let result = '';
      let count = 0;
      for(let i = 0; i < strnew.length; i++){
        if(!alp.includes(strnew[i])){
          result += strnew[i];
          if(i==0){
            count = 0;
          }else{
            count +=1;
          }
          }
        else{
          result += alp[(num[strnew[i]] + num[keynew[(i-count) % keynew.length]]) % alp.length];
          }

      }
      return result.toUpperCase();

  }
  decrypt(str,key) {
    if((str === undefined)||(key === undefined)){
      throw new Error('Incorrect arguments!');
    }
    const alp = "abcdefghijklmnopqrstuvwxyz";
    const num = {};
    let strnew = str.toLowerCase();
    let keynew = key.toLowerCase();

    for(let i = 0; i < alp.length; i++){
          num[alp[i]] = i
        }

      let result = '';
      let count = 0;
      for(let i = 0; i < strnew.length; i++){
        if(!alp.includes(strnew[i])){
          result += strnew[i];
          if(i==0){
            count = 0;
          }else{
            count +=1;
          }
          }
        else{
          if(((num[strnew[i]] - num[keynew[(i-count) % keynew.length]]))<0){
            result += alp[(alp.length + ((num[strnew[i]] - num[keynew[(i-count) % keynew.length]])))]
            }
          else{
          result += alp[(num[strnew[i]] - num[keynew[(i-count) % keynew.length]]) % alp.length];
          }
        }
      }
      return result.toUpperCase();
}
}
module.exports = {
  VigenereCipheringMachine
};
