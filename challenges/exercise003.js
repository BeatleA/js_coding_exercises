const { capitalize } = require("./exercise001");

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums.length != 0) {
    return nums.map(num => Math.pow(num, 2));
  } else {
    return [];
  }
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let length = words.length;
  if (length != 0) {
    let camelCaseWords = words[0];
    words.slice(1, length).forEach(word => camelCaseWords += capitalize(word));
    return camelCaseWords;
  } else {
    return "";
  }
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let subjectsCounter = 0;
  people.forEach(function (person) {
    if (person.subjects !== undefined) {
      subjectsCounter += person.subjects.length;
    }
  });
  return subjectsCounter;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu.some(dish => dish.ingredients.includes(ingredient));
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let uniqueArr = new Set(arr1.filter(number => arr2.includes(number)));
  return Array.from(uniqueArr).sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
