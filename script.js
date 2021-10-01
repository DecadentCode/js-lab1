"use strict";

const myName = "Andrew Cyburt";
const age = 26;
const birthday = "May 11";
const pineapplePizza = false;
const lifeEvents = [
  "I grew up in Harper Woods, Michigan",
  "I was in Boy Scouts",
  "I've broken 4 bones",
  "I stopped drinking soda",
];

if (pineapplePizza) {
  console.log(
    `My name is ${myName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${myName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log("randomNumber !== 5");
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
