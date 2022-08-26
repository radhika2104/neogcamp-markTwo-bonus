// 'npm i chalk@4.1.2'  in terminal to use chalk with require
// 'npm uninstall chalk' in terminal to delete latest version that does not work with require
// 'npm i readline-sync'  in terminal to use readline with require
const chalk = require('chalk');
const readlineSync = require('readline-sync');
const username = readlineSync.question('please enter your name: ');
console.log('')
console.log('Welcome, ' + chalk.cyan(username.charAt(0).toUpperCase()) + chalk.cyan(username.substr(1)) + '!');


let day = 0;
let month = 0;
function birthdayFormat(str) {
  // Check if string is longer or shorter than allowed
  if ((str.length > 5) || (str.length < 5)) {
    console.log('')
    console.log(chalk.italic('Error info: Birthday cannot have entered number of characters.'));
    console.log(chalk.italic('Try preceding single digit with 0, like entering 01 instead of 1.'));
    return false;
  }

  seperators = ['/',' ','.',':','-'] 
  // Check if we do not have a valid seperater in between
  if (seperators.includes(str.charAt(2)) === false) {
    console.log('')
    console.log(chalk.italic('Error info: Date does not have a valid seperator.'));
    return false;
  }

  // Check if dd or mm is not a number
  day = Number(str.slice(0, 2))
  month = Number(str.slice(3, 5))
  if (isNaN(day) === true || isNaN(month) === true) {
    return false;
  }
  // Check for larger scope of dates and months 
  if (month > 12 || day > 31 || month < 1 || day < 1) {
    console.log('')
    console.log(chalk.italic('Error info: date or month is out of range'));
    return false;
  }
  // Check if dd and mm is a valid combination together
  if (day > 29 && month === 2) {
    console.log('')
    console.log(chalk.italic('Error info: not a valid date and month combo'));
    return false;
  }
  if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && day > 31) {
    console.log('')
    console.log(chalk.italic('Error info: not a valid date and month combo'));
    return false;
  }
  if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    console.log('')
    console.log(chalk.italic('Error info: not a valid date and month combo'));
    return false;
  }
}

let birthday = ''

while (true) {
  console.log('');
  birthday = readlineSync.question('please enter your birth date and month in format [dd/mm]: ');
  // Check if the birthday contains a letter - post invalid
  boolstring = null;
  if (birthdayFormat(birthday) === false) {
    console.log(chalk.red('Please enter a valid birthday as per given format!'));
  }
  else {
    break;
  }
}

let complete_date = ''
if (month > 9) {
  complete_date = day.toString() + month.toString();
} else {
  complete_date = day.toString() + '0' + month.toString();
}

complete_date = Number(complete_date);

// Determine whether the ddmm is prime or not - ddmm will range between 0101 and 3112
// A number is prime if it is only divisible by itself and 1
boolprime = true;
for (let i = 2; i < complete_date; i++) {
  if (complete_date % i === 0) {
    boolprime = false;
    break;
  }
}


console.log('')
// Display result to users 
if (boolprime === false) {
  console.log(chalk.magenta.bold('Your birthday is not a prime number!'))
} else {
  console.log(chalk.yellow.bold('Yaye! Your birthday is a prime number! '))
  console.log('Take a screenshot and share this moment with your friends!')
}


