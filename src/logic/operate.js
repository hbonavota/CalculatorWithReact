import Big from "big.js";

const operate= (numberOne, numberTwo, operation) =>{
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || (operation === "÷" || operation === 'x' ? "1": "0")); //If dividing or multiplying, then 1 maintains current value in cases of null
  
  switch(operation){
      case "+":
        return one.plus(two).toString();

      case "-":
        return one.minus(two).toString();
      
      case "x":
        return one.times(two).toString();
      
      case "÷":
        if (two === 0||two == "0") {
          alert("Divide by 0 error");
          return "0";
        } else {
          return one.div(two).toString();
        }
      default:
        throw Error(`Unknown operation '${operation}'`);
  }
}

export default operate;