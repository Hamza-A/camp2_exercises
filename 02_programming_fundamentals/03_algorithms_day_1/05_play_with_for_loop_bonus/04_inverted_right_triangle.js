// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```

// let line = ["*", "*", "*", "*", "*",];
//
// console.log(line.join(""));
//
// for (let i = 0; i < 4; i++){
//   line.splice(i, 1, " ");
//   console.log(line.join(""));
// }




for (let i = 1; i < 5; i ++){
  let line = "*****";
  let space = "";
  let result = space + line;
  for (let j = 0; j < i; j++){
    space = space + " ";
    console.log(result);
  }
}
