//Var,let,const declarations
var myName = "John";
let myAge = 30;
const myCountryName = "USA";
myAge=31;//let allows reassignment
//myCountryName="Canada";//const does not allow reassignment, this will throw an error
if(true){
    let blockVariable:string="Inside block";
    var blockVariableVar:string="Inside block var";
    console.log(blockVariable);
    console.log(blockVariableVar);
}
//console.log(blockVariable); // This will throw an error because blockVariable is not accessible outside the block
console.log(blockVariableVar); // This will work because blockVariableVar is declared with var and is function-scoped
console.log("My name is " + myName);
console.log("My age is " + myAge);
console.log("My country is " + myCountryName); 