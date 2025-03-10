const name = "rehan"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String ('RehanKhan')
const gameName = new String ('Rehan-Khan-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-9 , 4)
console.log(anotherString);

const newStringOne = "   Rehan    "
console.log(newStringOne);
console.log(newStringOne.trim());





const url = "https://rehan.com/rehan%20khan"
console.log(url.replace('%20', '-'));
console.log(url.includes('rehan'));


console.log(gameName.split('-'));






