// Taks 1
const starFunc1 = (star) => {
  let pattern = "";

  for (let i = 1; i <= star; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }

    pattern += "\n";
  }

  return pattern;
};
console.log(starFunc1(5));

// Task 2
const starFunc2 = (star) => {
  let pattern = "";

  for (let i = 1; i <= star; i++) {
    for (let j = star; j >= i; j--) {
      pattern += "*";
    }

    pattern += "\n";
  }

  return pattern;
};
console.log(starFunc2(5));

// Task 3
const starFunc3 = (star) => {
  let pattern = "";

  for (let i = 1; i <= star; i++) {
    for (let j = star - 1; j >= i; j--) {
      pattern += " ";
    }

    for (let k = 1; k <= i; k++) {
      pattern += "*";
    }

    pattern += "\n";
  }

  return pattern;
};
console.log(starFunc3(5));

// Taks 4
const starFunc4 = (star) => {
  pattern = "";

  for (let i = 1; i <= star; i++) {
    for (let j = star - 1; j >= i; j--) {
      pattern += " ";
    }

    for (let k = 1; k <= i; k++) {
      pattern += "*";
    }

    for (let l = 1; l <= i - 1; l++) {
      pattern += "*";
    }

    pattern += "\n";
  }

  return pattern;
};
console.log(starFunc4(5));
