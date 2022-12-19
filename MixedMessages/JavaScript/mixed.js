function generateRandomNumber(num) {
  // Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num);
}

const collectiveWisdom = {
  adjective: ["happy", "thankful", "joyful"],
  verb: ["healthy", "strong", "capable"],
  adjectiveTwo: ["open to learning", "great", "open to new opportunities"],
};

// Store the 'wisdom' in an array
let personalWisdom = [];

// Iterate over the object
for (let prop in collectiveWisdom) {
  let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);

  // use the object's properties to customize the message being added to personalWisdom
  switch (prop) {
    case "adjective":
      personalWisdom.push(`I am"${collectiveWisdom[prop][optionIdx]}".`);
      break;
    case "verb":
      personalWisdom.push(
        `because I am "${collectiveWisdom[prop][optionIdx]}".`
      );
      break;
    case "adjectiveTwo":
      personalWisdom.push(`I will be"${collectiveWisdom[prop][optionIdx]}".`);
      break;
    default:
      personalWisdom.push("There is not enough info.");
  }
}

function formatWisdom(wisdom) {
  // Add some ASCII here?
  // Add in more symbols to the array? like emojies or what not?
  const formatted = personalWisdom.join("\n");
  console.log(formatted);
}

formatWisdom(personalWisdom);
