// EXPECT
const expect = (input) => {
  return new Matchers(input);
};

// DESCRIBE
const describe = (label, callback) => {
  console.log(`__________ Describe:  ${label} __________`);
  console.log(`____________________________________________________________`);
  console.log('');
  callback();
};

// CONTEXT
const context = (label, callback) => {
  console.log(`::Context:: ${label}`);
  callback();
};

// IT
const it = (label, callback) => {
  console.log(`::::It ${label} {`);
  callback();
  console.log(`}::::`);
};
