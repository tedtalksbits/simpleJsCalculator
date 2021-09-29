
// global vars
let input = document.getElementById('input');

// get array of math symbols
let arithSymbols = Array.from(document.getElementsByClassName("arithSymbol"));

// disable arithSymbols if field is blank
if (input.innerText == "") {

   arithSymbols.forEach(el => {
      el.disabled = true;
   });
}


const numClickFunction = (e) => {

   // enable symbols after input is set
   arithSymbols.forEach(el => {
      el.disabled = false;
   })

   input.innerText += e.innerText;
}

const calculateFunction = () => {
   let evalString = input.innerText;
   let calculation = eval(evalString);
   input.innerText = calculation;
}


const clearClickFunction = () => {
   input.innerText = "";
   arithSymbols.forEach(el => {
      el.disabled = true;
   });
}
