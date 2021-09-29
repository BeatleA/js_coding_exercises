function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let selectedNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === char) {
      selectedNames.push(names[i]);
    }
  }
  return selectedNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbs = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, 3) === "to ") {
      verbs.push(words[i]);
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      integers.push(nums[i]);
    }
  }
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    let city = users[i].data.city.displayName;
    if (city !== undefined) {
      cities.push(city);
    }
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squareRoots = [];
  for (let i = 0; i < nums.length; i++) {
    squareRoots.push(Math.round(Math.sqrt(nums[i]) * 100) / 100);
  }
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let selectedSenteces = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
      selectedSenteces.push(sentences[i]);
    }
  }
  return selectedSenteces;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSides = [];
  for (let i = 0; i < triangles.length; i++) {
    longestSides.push(Math.max(...triangles[i]));
  }
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
