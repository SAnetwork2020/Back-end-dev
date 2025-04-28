let courseName: string = "Backend web development"
console.log(courseName);

let printNumbers = (start:number, end:number):void => {
    let temp: string = "";
    /* The code snippet is defining a function called `printNumbers` that takes two parameters `start`
    and `end`, both of type `number`. Inside the function, there is a `for` loop that iterates from
    the `start` value to the `end` value (inclusive). */
  if (start < end) {
      for (let i : number = start; i <= end; i++) {
          temp += `${i} `;
      }
      console.log(temp);
  }
  else{
    console.log("Invalid numbers")
  }
};

printNumbers(5,10);