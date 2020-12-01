const input = require("./input");

let entry1, entry2, entry3;
input.forEach((elem1) => {
  input
    .filter((elem2) => elem2 !== elem1)
    .forEach((elem2) => {
      input
        .filter((elem3) => ![elem1, elem2].includes(elem3))
        .forEach((elem3) => {
          const sum = +elem1 + +elem2 + +elem3;
          if (sum === 2020) {
            entry1 = elem1;
            entry2 = elem2;
            entry3 = elem3;
          }
        });
    });
});
const answer = entry1 * entry2 * entry3;
console.log(entry1, entry2, entry3, answer);
