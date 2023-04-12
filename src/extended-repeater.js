const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let opt = options;
  let  rep = opt.repeatTimes; 
  let  sep = opt.separator;
  let  add = opt.addition;
  let  addrep = opt.additionRepeatTimes;
  let  addsep = opt.additionSeparator;
  let end = '';
  if(add===undefined){
    end = ''
    }
  if(add === null){
    add ='null'
    }
  if(add!=undefined){
    if(addrep === undefined){
      addrep=1;
      }
    for(let i=0; i<addrep;i++){
    if(i==addrep-1){
    end = end+add;
      }
    else{
      if(addsep===undefined){
        addsep = '|'
        }
        end = end+add+addsep;
        }
      }
    }
  
  let part = str+end;
  if(sep === undefined){
    sep='+';
  }
  if(rep === undefined){
    rep=1;
  }
  for(let i=0; i<rep; i++){
    if(i==rep-1){
    result=result+part;
      }
    else{
    result=result+part+sep;
      }
    }
  return result; 
  }

module.exports = {
  repeater
};
