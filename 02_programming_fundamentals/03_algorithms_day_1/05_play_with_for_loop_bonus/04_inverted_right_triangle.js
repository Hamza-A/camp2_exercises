// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```

let line = ["*", "*", "*", "*", "*",];

console.log(line.join(""));

for (let i = 0; i < 4; i++){
  line.splice(i, 1, " ");
  console.log(line.join(""));
}
