// Dom testing for backend response

//  Checking Front End Note exists

// ------------ Checks initialised

// Loading page
// Checking that there is only 1 preview in the list   (document.querySelectorAll("#preview-card"))
// Check that the length is 1
//  check that the title = .... welcome to Eternal note
//  Body = ... something

// ------------ Checks buttom

// Click
// Dom check
class UISpec {
  checkElementText(id) {
    document.querySelector(`#{id}`).innerHTML;
  }

  checkButtonValue(id) {
    document.querySelector(`#{id}`).value;
  }
}
