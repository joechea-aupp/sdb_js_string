"use strict";

const str1 = "Name: John, Age: 20, Profession: Web Developer";
// const age = str1.slice(str1.search("Age"), str1.search("Age") + 7);
// const age = str1.slice(str1.search("Age"), 0);

const age = str1.substring(str1.search("Age"), 0);
console.log(age);

// search for registration number from text
const message =
  "My registration number is RKQ01292810-23. Please update me on the status";

const findReg = message.search(/RKQ\d+\-\d+/g);
const extractReg = message.substring(findReg, findReg + 14);
console.log(`Reg No. ${extractReg}`);
