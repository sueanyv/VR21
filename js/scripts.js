
const name = "Sugey";
const lasname ="Valencia";
const favcolor = "light blue";
const discolor ="pink";
const bolTrue = true;
const bros = 3;
const sis = 1;
const ageSentence = "23"
const bolFalse = false;
var num = 12;
const sentence = "It is snowing";



console.log(`My name is ${name} ${lasname}`);
console.log(`Lives in Seattle:`, bolTrue);
console.log(`I have ${bros} brothers and ${sis} sister`);
console.log(`I have ${bros + sis} siblings`);
console.log(`typeof bros `,typeof bros);
console.log(`My ${bros} brothers live in Washington:`, false);
console.log(sis<bros);
console.log( `typeof brolTrue `,typeof bolTrue );
console.log(`sis  === favcolor`,sis  === favcolor);
console.log(`favcolor === "light blue"`,favcolor === "light blue");
console.log( `bros % sis`,bros % sis );
console.log(Number.parseInt(bros));
console.log(`ParseInt of "45" =`,Number.parseInt("45"));
console.log(`I have ` + num.toString() + ` books` );  
console.log( `var num = 12 ; num.toString typeof num =`, typeof num.toString() );
const userAge = prompt("How old are you?");
if(userAge > 21){
    console.log("You can drink");
}else{
   console.log("NO DRINKING FOR YOU!");
}
