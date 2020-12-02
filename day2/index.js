const input = require("./input");

const part1Result = input
  // verify each password validity
  ?.map((item) => {
    let valid = false;
    const fragmentedItem = item?.split(" ");
    const [min, max] = fragmentedItem[0]?.split("-");
    const letterToCheck = fragmentedItem[1][0];
    const occurences = fragmentedItem[2].split(letterToCheck).length - 1;
    if (min <= occurences && occurences <= max) {
      valid = true;
    }
    return {
      value: item,
      valid,
    };
  })
  // Get valid passwords number
  ?.filter((elem) => !!elem?.valid).length;

const part2Result = input
  // verify each password validity
  ?.map((item, ind) => {
    const fragmentedItem = item?.split(" ");
    const positions = fragmentedItem[0]?.split("-");
    const letterToCheck = fragmentedItem[1][0];
    const valid =
      positions?.filter((elem) => {
        return !!(fragmentedItem[2][+elem - 1] === letterToCheck);
      })?.length === 1;

    return {
      value: item,
      valid,
    };
  }) // Get valid passwords number
  ?.filter((elem) => !!elem?.valid).length;

console.log(part1Result);
console.log(part2Result);
