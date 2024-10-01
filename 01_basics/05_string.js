const name = "annas"
const repoCount = 3

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('annas-ak-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('ak'));

const newString =  gameName.substring(4, 7)
console.log(newString);

const anotherString = gameName.slice(-5, 3)
console.log(anotherString);

const newStringOne = "    annas   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://annas.com/annaskhanoffical%20006"

console.log(url.replace('%20', '-'))

console.log(url.includes('annas'))

console.log(gameName.split('-'));
