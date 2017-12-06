function greet(name) {
  let greetingName = name;

  if (!name) {
    greetingName = "World";
  }

  return `Hello ${greetingName.toUpperCase()}!`;
}

greet();

module.exports = greet;
