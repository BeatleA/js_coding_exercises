function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNums = [];
  nums.forEach(function (num) {
    if (num < 1) {
      smallNums.push(num);
    }
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let selectedNames = [];
  names.forEach(function (name) {
    if (name.charAt(0) === char) {
      selectedNames.push(name);
    }
  });
  return selectedNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = [];
  words.forEach(function (word) {
    if (word.substring(0, 3) === "to ") {
      verbs.push(word);
    }
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integers = [];
  nums.forEach(function (num) {
    if (Number.isInteger(num)) {
      integers.push(num);
    }
  });
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  users.forEach(function (user) {
    let city = user.data.city.displayName;
    if (city !== undefined) {
      cities.push(city);
    }
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRoots = [];
  nums.forEach(function (num) {
    squareRoots.push(Math.round(Math.sqrt(num) * 100) / 100);
  });
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let selectedSenteces = [];
  sentences.forEach(function (sentence) {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      selectedSenteces.push(sentence);
    }
  });
  return selectedSenteces;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  triangles.forEach(function (triangle) {
    longestSides.push(Math.max(...triangle));
  });
  return longestSides;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
