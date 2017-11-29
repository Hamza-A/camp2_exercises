// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```

for (let nbEspaces= 0; nbEspaces < 5; nbEspaces++){
  const nbEtoiles = 5 - nbEspaces;
  let result = "";
  for(let j = 0; j < nbEspaces; j++) {
    result = result + " ";
  }
  for(let j = 0; j < nbEtoiles; j++) {
    result = result + "*";
  }
  console.log(result);
}

/*const stuff = ["*", "*", "*", "*", "*"];
const high = 5;

for(let i = 0; i < high; i++) {
  const gauche = stuff.slice(high - i).map((n) => " ");
  const droite = stuff.slice(i);
  const line = gauche.join("") + droite.join("");
  console.log(line);
}
*/
