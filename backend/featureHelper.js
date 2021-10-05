class UISpec {
  checkElementText(id) {
    document.querySelector(`#{id}`).innerHTML;
  }

  checkButtonValue(id) {
    document.querySelector(`#{id}`).value;
  }
}
