class Matchers {
  constructor(input) {
    this.input = input;
  }

  isInstanceOf(matchValue) {
    let result = this.input instanceof matchValue;
    let log = result
      ? `PASS: Input: ${this.input.constructor.name} is an instance of ${matchValue.name}`
      : `FAIL: Input: ${this.input.constructor.name} is not an instance of ${matchValue.name}`;
    this._printResponse(log, result);
  }

  isEq(matchValue) {
    let result = this.input === matchValue;
    let log = result
      ? `PASS: Input: ${this.input} is Equal to ${matchValue}`
      : `FAIL: Input: ${this.input} is Not Equal to ${matchValue}`;
    this._printResponse(log, result);
  }

  isNotEq(matchValue) {
    let result = this.input !== matchValue;
    let log = result
      ? `PASS: Input: ${this.input} is Not Equal to ${matchValue}`
      : `FAIL: Input: ${this.input} is Equal to ${matchValue}`;
    this._printResponse(log, result);
  }

  _printResponse(message, result) {
    let css = result ? 'green' : 'red';
    console.log(`%c ${message}`, `background: ${css};`);
  }
}
