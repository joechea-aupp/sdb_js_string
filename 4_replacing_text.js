"use strict";

const str =
  "Johnny Depp is an incredible actor. Johnny Depp was nominated for an Oscar";

const tom = str.replace("Johnny Depp", "Tom Cruise");
// to replace all
// const tom = str.replace(/Johnny Depp/g, "Tom Cruise");
// or
// const tom = str.replaceall("Johnny Depp", "Tom Cruise");

console.log(tom);

const message =
  "Rivercomb is 200 miles from the station and about 150 miles from the airport.";

const messageKms = message
  .replace(/\d+(?!miles)/g, (miles) => miles * 1.60934)
  .replace("miles", "kilometers");

console.log(messageKms);

const str1 =
  "The captain of this ship, a dangerous man - Captain Roger was known to have killed 10 whales!!!!!";

const str2 =
  "the captain of this ship - a dangerous man, captain roger was known to have killed 10 whales!!";

const compareString = (str1, str2) =>
  str1.toLocaleLowerCase().replaceAll(/[\W+_-]/gi, "") ===
  str2.toLocaleLowerCase().replaceAll(/[\W+_-]/gi, "");

console.log(compareString(str1, str2));
