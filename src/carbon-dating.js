const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof(sampleActivity)== 'string'){
    if((sampleActivity == '')||(sampleActivity == ' ')){
      return false;
    }
    let result = 0;
  let num = Number(sampleActivity);
  if((num == 0)||(num < 0)||(num > 15)){
    return false;
    }
  if(isNaN(num)){
      result = false;
      }
  else {
      let k = Math.log(2)/HALF_LIFE_PERIOD;
      result = Math.ceil((Math.log(MODERN_ACTIVITY/num))/k);
    }
  return result;
    }
  return false;
}

module.exports = {
  dateSample
};
