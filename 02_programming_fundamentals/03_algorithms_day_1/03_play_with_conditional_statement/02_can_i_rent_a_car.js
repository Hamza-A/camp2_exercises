// Do not pay attention to this line for the moment
const driverData = require('./.driver_data');
// These are the variables against which you should test
// driverLicense is a string with the kind of license (ex: AM, B, D...)
const driverLicense = driverData.driverLicense;
// licenceIssued is an integer with the year it was issued (ex: 2001)
const licenceIssued = driverData.licenceIssued;
// numberOfAccident is an integer with the number of accidents.
const numberOfAccident = driverData.numberOfAccident;
// bonus is a float that represent the driver's bonus
const bonus = driverData.bonus;

// Assign a boolean to this variable:
//   `true` if the driver can rent a car
//   `false` if not
let canRentACar = false;

// Your code here:

//the driver has (at least) a B;
//driver has been licensed for at least 2 years;
//he must never have had any accidents or have re-achieved a bonus of 0.7.
if (driverLicense >= "B" &&
    licenceIssued <= 2015 &&
    (numberOfAccident===0 || bonus >= 0.7 )) {
  canRentACar = true;
} else {
  canRentACar = false;
}
// Your code here:
console.log(canRentACar);
