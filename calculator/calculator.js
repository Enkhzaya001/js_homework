const numberBtns = document.getElementsByClassName("number");
const display = document.getElementById("input");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");
const operators = document.getElementsByClassName("operator")[0];
const addBtn = document.getElementsByClassName("addBtn")[0];
const minusBtn = document.getElementsByClassName("minusBtn")[0];
const divBtn = document.getElementsByClassName("divBtn")[0];
const multiBtn = document.getElementsByClassName("multiBtn")[0];
const modBtn = document.getElementsByClassName("modBtn")[0];

let operand1 = "";
let operand2 = "";
let operator = "";
// let decimalCount = 0;

console.log("N-BTNS", numberBtns);

// for (let index = 0; index < array.length; index++) {
//     const element = numberBtns[index];

// }

for (const btn of numberBtns) {
  btn.addEventListener("click", () => {
    // console.log("Clicked", btn.innerText);

    if (display.innerText === "0") {
      display.innerText = btn.innerText;
    } else {
      if (display.innerText.includes(".") && btn.innerText === ".") {
        return;
      }
      display.innerText = display.innerText + btn.innerText;
    }

    // if (display.innerText === "0") {
    //   display.innerText = btn.innerText;
    // } else display.innerText = display.innerText + btn.innerText;
  });
}

// operators.addEventListener("click", () => {
//   for (const opr of operators) {
//     switch (opr) {
//       case "+": {
//         console.log("Clicked-add");
//         operand1 = display.innerText;
//         operator = "+";
//         display.innerText = "";
//       }
//       case "-": {
//         console.log("Clicked-minus");
//         operand1 = display.innerText;
//         operator = "-";
//         display.innerText = "";
//       }
//       case "*": {
//         console.log("Clicked-multi");
//         operator = "*";
//       }
//       case "/": {
//         console.log("Clicked-div");
//         operator = "/";
//       }
//       default:
//         console.log("Operation not work");
//     }
//   }
// });

addBtn.addEventListener("click", () => {
  console.log("Clicked-add");
  operand1 = display.innerText;
  operator = "+";
  display.innerText = "";
  decimalCount = 0;
});

minusBtn.addEventListener("click", () => {
  console.log("Clicked-minus");
  operand1 = display.innerText;
  operator = "-";
  display.innerText = "";
  decimalCount = 0;
});

divBtn.addEventListener("click", () => {
  console.log("Clicked-div");
  operand1 = display.innerText;
  operator = "/";
  display.innerText = "";
  decimalCount = 0;
});

multiBtn.addEventListener("click", () => {
  console.log("Clicked-multi");
  operand1 = display.innerText;
  operator = "*";
  display.innerText = "";
  decimalCount = 0;
});

modBtn.addEventListener("click", () => {
  console.log("Clicked-modul");
  operand1 = display.innerText;
  operator = "%";
  display.innerText = "";
  decimalCount = 0;
});

equalBtn.addEventListener("click", () => {
  operand2 = display.innerText;
  let result = 0;
  //   if (operator === "+") {
  //     result = parseFloat(operand1) + parseFloat(operand2);
  //   } else if (operator === "-") {
  //     result = parseFloat(operand1) - parseFloat(operand2);
  //   } else if (operator === "/") {
  //     result = parseFloat(operand1) - parseFloat(operand2);
  //   }
  switch (operator) {
    case "+": {
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    }
    case "-": {
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    }
    case "/": {
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    }
    case "*": {
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    }
    case "%": {
      result = parseFloat(operand1) % parseFloat(operand2);
      break;
    }
    default:
      console.log("Operation not work");
  }
  // if (decimalCount > 0) {
  //   display.innerText = result.toFixed(decimalCount);
  // } else {
  //   display.innerText = result.toString();
  // }
  operand1 = display.innerText;
  // operand2 = "";
  // operator = "";
  // decimalCount = 0;
  display.innerText = result;
  operand1 = result;
});

clearBtn.addEventListener("click", () => {
  display.innerText = "";
});
