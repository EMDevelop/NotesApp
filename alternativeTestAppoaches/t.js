function expect(expression, testname) {
  if (expression == true) {
    return `Test passed! (${testname})`;
  } else if (expression == false) {
    return `Test failed! (${testname})`;
  }
}

function isTheSame(param1, param2) {
  if (param1 == param2) {
    return true;
  } else {
    return false;
  }
}

console.log(expect(isTheSame('bob', 'bob') == true, 'Bob is equal to bob'));
console.log(expect(isTheSame('bob', 'notbob') == true, 'Bob is equal to bob'));
