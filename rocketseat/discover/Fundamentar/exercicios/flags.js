const process = require('process');

module.exports = function getFlag(str) {
  isFlagName = str === '--name';
  isFlagGreetings = str === '--greetings';

  if (isFlagName){
    let indexFullName = process.argv.indexOf('--name');
    let fullName = process.argv[indexFullName+1];
    return fullName;
  }
  if (isFlagGreetings){
    let indexGreetings = process.argv.indexOf('--greetings');
    let greetings =process.argv[indexGreetings+1];
    return greetings;
  }
  return ;
}