const test = (input) => {
  const vokal = ["A", "I", "U", "E", "O"];
  let result = "";

  for (let i = 0; i < input.length; i++) {
    const katakter = input[i].toUpperCase();
    if (vokal.includes(katakter)) {
      result += "O";
    } else {
      result += "X";
    }
  }

  return result;
};

console.log(test("Kodok"));
