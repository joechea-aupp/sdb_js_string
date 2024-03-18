"use strict";

const message =
  "      Hello everyone, this is a message from the moon, At approx 9.27am. we received a distress call from Station X-23           ";

// trim with trim function
const trimmed = message.trim();
console.log(trimmed);

// remove every whitespace in the string
const removeSpace = message.replace(/\s/g, "");
console.log(removeSpace);
