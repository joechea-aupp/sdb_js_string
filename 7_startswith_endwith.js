"use strict";

const data = [
  "SENSE01,1123,23,55,0.52",
  "SENSE01,1123,22.3,65,0.77",
  "SENSE01,1330,22.8,62,0.872",
  "SENSE02,1126,18,89,0.65",
  "SENSE02,1235,17,90,0.77",
  "SENSE02,1330,17.2,85,0.79",
];

const readDataToObj = (key, arr) => {
  return arr
    .filter((el) => el.startsWith(key))
    .filter((el) => el.split(",")[4] > 0.75)
    .map((el) => {
      const [sensor, time, temp, humidity, accuracy] = el.split(",");
      return {
        sensor,
        time,
        temp,
        humidity,
        accuracy,
      };
    });
};

// console.log(data.filter((el) => el.startsWith("SENSE01")));

console.log(readDataToObj("SENSE01", data));

// endwith
const byAccuracy = (key, arr) => arr.filter((el) => el.endsWith(key));

console.log(byAccuracy("0.77", data));
