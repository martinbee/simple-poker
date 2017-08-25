import readlineSync from 'readline-sync';

import Game from './Game.js';

const affirmativeResponses = ['YES', 'Y'];
const negativeResponses = ['NO', 'N'];
const acceptableResponses = [...affirmativeResponses, ...negativeResponses];

let endPrompt = false;

do {
  const response = readlineSync.question('Do you wish to play poker? ');

  const uppercasedResponse = response.toUpperCase();
  const acceptableResponse = acceptableResponses.includes(uppercasedResponse);

  if (acceptableResponse) {
    const affirmativeResponse = affirmativeResponses.includes(uppercasedResponse);

    if (affirmativeResponse) {
      Game.start();

      endPrompt = true;
    } else {
      endPrompt = true;
    }
  } else {
    console.log('Please enter yes or y to play, or no or n to quit.');
  }
} while (!endPrompt);
