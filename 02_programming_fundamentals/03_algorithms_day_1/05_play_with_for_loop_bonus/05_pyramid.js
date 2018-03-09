// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

let stars = ["*"];
let space = [" ", " ", " ",];
let result = space.join("") + stars.join("");

console.log(result);

for (let i = 1; i < 4; i++){
  stars.push("*", "*");
  space.pop();
  let result = space.join("") + stars.join("");
  console.log(result);
}
