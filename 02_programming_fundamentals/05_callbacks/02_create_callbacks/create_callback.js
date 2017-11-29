const log = (text) => console.log(text);

// A function that takes two parameters, this first one being an object like below
// and the second one being a callback function.
const getInput = (input, callback) => {

  callback(input.key);
  // When finished, we want to log the key params...
};

getInput({user: "Lorem", key: "arrow_up"}, log);
