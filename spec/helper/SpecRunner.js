class Spec {
  expect(method) {
    if (method instanceof Function) {
      this.input = method();
    } else {
      this.input = method;
    }
    return this;
  }

  isInstanceOf(matchValue) {
    let result = this.input instanceof matchValue;
    let log = result
      ? `PASS: Input: ${this.input} is an instance of ${matchValue}`
      : `FAIL: Input: ${this.input} is not an instance of ${matchValue}`;
    this._printResponse(log);
  }

  isEq(matchValue) {
    let result = this.input === matchValue;
    let log = result
      ? `PASS: Input: ${this.input} is Equal to ${matchValue}`
      : `FAIL: Input: ${this.input} is Not Equal to ${matchValue}`;
    this._printResponse(log);
  }

  _printResponse(message) {
    console.log(message);
  }

  // Front End Model Tests
  // ----------------------------
  // instance of a type of class
  // length of an array (.isEq)

  // Back End Test
  // --------------------------
  // once you add a new note, it shows on the page (after clicking the button)
  // Check that the title is the default title on the screen when page loads
}

// c = new Spec();

// c.expect(a).isInstanceOf(Thing);
// c.expect(4).isEq(5);
