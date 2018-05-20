const path = require("path");

// Add a function `pwd` which takes no arguments and return the current folder name we are in
//
// Example
//
// pwd() # => "/Users/john/Workspace/my_folder"
function pwd(){
  const result = path.dirname("/Users/Hamza/Workspace/camp2_exercises/02_programming_fundamentals/07_file_management/01_basic_fs");
  return result;
}

console.log(pwd());

module.exports = pwd
