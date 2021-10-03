function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  if (sandwich.fillings === undefined) return [];
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === undefined) throw new Error("city is required");
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if (people < 0) throw new Error("number of people cannot be negative");
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let sheepCounter = 0;
  arr.forEach(element => { if (element === "sheep") sheepCounter++ });
  return sheepCounter;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address?.postCode === undefined) throw new Error("postCode is required");
  const postCode = person.address.postCode;
  return postCode.charAt(0) === "M" && /\d/.test(postCode.charAt(1));
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
