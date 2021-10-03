function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const smallNums = nums.filter(function (num) {
    return num < 1;
  });
  return smallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const selectedNames = names.filter(function (name) {
    return name.charAt(0) === char;
  });
  return selectedNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = words.filter(function (word) {
    return word.substring(0, 3) === "to ";
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const integers = nums.filter(function (num) {
    return Number.isInteger(num);
  });
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  const cities = users.map(function (user) {
    return user.data?.city?.displayName;
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = nums.map(function (num) {
    return Math.round(Math.sqrt(num) * 100) / 100;
  });
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const selectedSenteces = sentences.filter(function (sentence) {
    return sentence.toLowerCase().includes(str.toLowerCase());
  });
  return selectedSenteces;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longestSides = triangles.map(function (triangle) {
    return Math.max(...triangle);
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
