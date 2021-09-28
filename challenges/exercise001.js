function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0, 1).toUpperCase() + "." + lastName.substring(0, 1).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return Math.round((100 + vatRate) * originalPrice) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  return Math.round((100 - reduction) * originalPrice) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  let length = str.length;
  let middle = Math.floor(length / 2);
  if (length % 2 == 0) {
    return str.substring(middle - 1, middle + 1);
  } else {
    return str.charAt(middle);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  words.forEach(function (word, index) {
    words[index] = reverseWord(word);
  });
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let linuxCounter = 0;
  users.forEach(function (user) {
    if (user.type === "Linux") linuxCounter++;
  });
  return linuxCounter;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let length = scores.length;
  if (length != 0) {
    let mean = 0;
    scores.forEach(score => mean += score);
    mean /= length;
    return Math.round(mean * 100) / 100;
  } else {
    return -1;
  }
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (n % 3 == 0 && n % 5 == 0) {
    return "fizzbuzz";
  } else if (n % 3 == 0) {
    return "fizz";
  } else if (n % 5 == 0) {
    return "buzz";
  } else return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
