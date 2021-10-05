function theseSeemEqual(thingIWantToCheck, thingItShouldBeEqualTo, message) {
  if (thingIWantToCheck === thingItShouldBeEqualTo) {
    console.log(`${message} - you were right`);
  } else {
    console.log(`${message} - nope, not even close`);
  }
}
let var1 = 'ciao';
let var2 = 'bye';
let var3 = 'ciao';

theseSeemEqual(var1, var2, 'should be equal to var2');
theseSeemEqual(var1, var3, 'should be equal to var2');
