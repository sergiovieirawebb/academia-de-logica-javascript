const sum = (value1, value2) => {
  return value1 + value2;
};

const subtract = (value1, value2) => {
  return value1 - value2;
};

const summationOf = (number) => {
  return number;
};


if (typeof module !== 'undefined') {
  module.exports = { sum, subtract, summationOf };
}

