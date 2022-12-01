function difference(a, b) {

    return a - b;

}

console.log(difference(2,2)); // 0
console.log(difference(0,2)); // -2


//////////////////////

function product (a, b) {
    return a * b;
}
console.log(product(2,2)); // 4
console.log(product(0,2)); // 0

//////////////////////





const printDay = (num) => {
    const day = {
          1: "Sunday",
          2: "Monday",
          3: "Tuesday",
          4: "Wednesday",
          5: "Thursday",
          6: "Friday",
          7: "Saturday",
        };
      
      return day[num];  
    }
    console.log(printDay(4));
    console.log(printDay(41)); 


function lastElement(arr){
    return arr.pop();
  }
  
  console.log(lastElement([1,2,3,4])); // 4
  console.log(lastElement([])); // undefined
//////////////////////



function numberCompare(a, b) {
    if (a === b) {
        return "Numbers are equal";
    } else if (a > b) {
        return "First is greater"

    } else {
        return "Second is greater"
    }
}

console.log(numberCompare(1, 1)); // "Numbers are equal"
console.log(numberCompare(2, 1)); // "First is greater"
console.log(numberCompare(1, 2)); // "Second is greater"

