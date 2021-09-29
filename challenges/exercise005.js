const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let index = nums.indexOf(n);
  if (index != -1 && index != nums.length - 1) {
    return nums[index + 1];
  } else {
    return null;
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const counted = { 0: 0, 1: 0 };
  [...str].forEach(char => { if (char === "0" || char === "1") counted[char]++ });
  return counted;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.flat().reduce((total, number) => total += number, 0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let length = arr.length;
  if (length > 1) {
    let temp = arr[0];
    arr[0] = arr[length - 1];
    arr[length - 1] = temp;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  let searchTermFound = false;
  for (let value of Object.values(haystack)) {
    searchTermFound = value.toString().toLowerCase().includes(searchTerm.toLowerCase());
    if (searchTermFound) break;
  }
  return searchTermFound;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const wordFrequencies = {};
  for (let word of str.split(' ')) {
    word = word.toLowerCase().replace(/\W/g, "");
    console.log(word);
    if (wordFrequencies[word] === undefined) {
      wordFrequencies[word] = 1;
    } else {
      wordFrequencies[word] += 1;
    }
  }
  return wordFrequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
