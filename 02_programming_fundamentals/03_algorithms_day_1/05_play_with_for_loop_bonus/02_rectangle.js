// ## A Rectangle of 10 by 10
//
// ```
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```
let result = "";

for (let i = 0; i < 10; i++){
  result= result + "*";
}
console.log(result);

for (let i = 0; i < 9; i++){
  console.log(result);
}
