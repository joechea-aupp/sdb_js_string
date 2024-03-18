"use strict";
// https://regexr.com/

const text =
  "Whether its color or colour, it is all the same. The human eye can see a wide gamut of colours, which makes us unique as a species.";

const pattern = /colou?rs?/g;
// or
// const pattern = new RegExp("colou?rs?", "g");

// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));

// or

let results;
while ((results = pattern.exec(text)) !== null) {
  console.log(results[0]);
}

// find string using regex
const article =
  "The movie starring Johnny Depp was released to the masses on a social networking site which created quite a buzz in the industry due to its unconventional approach";

const findActor = (str, actor) => {
  const pattern = new RegExp(actor, "g");
  //   test return boolean
  return pattern.test(str);
};

console.log(findActor(article, "Johnny Depp"));

const findActorUsingIndex = (str, actor) => {
  const pattern = new RegExp(actor, "g");
  //   test return index
  return str.search(pattern);
};

console.log(findActorUsingIndex(article, "Johnny Depp"));

// search email pattern
const str =
  "If you have any information on the whereabouts of our cat, please email us at findKibbles@gmail.com and we would get in touch with you right away. You can also mail us at john@mockery.com. Thanks.";

const getEmails = (str) => {
  const pattern = /[a-z0-9._]+@[a-z0-9-]+\.[a-z]{2,6}/gi;
  const detect = str.match(pattern);
  return detect && detect.length > 1 ? detect : detect[0];
};

console.log(getEmails(str));

// find and extract hashtags
const post =
  "The Calzone at the #Pizza Mill #foodie #calzone #italian #dindin #foodpics #foodblogger #weekend #fun";

const getTags = (post) => {
  const pattern = /(?<=#)\w+/gi;
  const detect = post.match(pattern);
  return detect && detect.length > 1 ? detect : detect[0];
};

console.log(getTags(post));

// find and get all the numbers
const message =
  "Rivercomb is 200 miles from the station and about 150 miles from the airport.";

const getDistance = (str) => {
  const pattern = /(?<miles>\d+)\s*(?=miles)/g;
  return str.matchAll(pattern);
};

for (const dist of getDistance(message)) {
  console.log(dist.groups.miles);
}
