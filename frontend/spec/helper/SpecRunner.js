const expect = (input) => {
  return new Matchers(input);
};

const describe = (label, callback) => {
  console.log(`__________ Describe:  ${label} __________`);
  console.log(`____________________________________________________________`);
  console.log('');
  callback();
};

const context = (label, callback) => {
  console.log(`::Context:: ${label}`);
  callback();
};

const it = (label, callback) => {
  console.log(`::::It ${label} {`);
  callback();
  console.log(`}::::`);
};
