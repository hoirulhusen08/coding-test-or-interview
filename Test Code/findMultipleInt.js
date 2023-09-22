const numbers = [3, 2, 6, 7, 8, 9, 12, 4, 15, 17];
let kelipatan2 = 0;
let kelipatan3 = 0;
let selainKelipatan = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    kelipatan2++;
  } else if (numbers[i] % 3 === 0) {
    kelipatan3++;
  } else {
    selainKelipatan++;
  }
}

console.log(`Kelipatan 2 = ${kelipatan2}`);
console.log(`Kelipatan 3 = ${kelipatan3}`);
console.log(`Selain kelipatan = ${selainKelipatan}`);
