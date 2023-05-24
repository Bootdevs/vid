     let display = document.getElementById("display");
      let equation = "";
      let isOperatorClicked = false;

        function appendValue(value) {
            if (isOperatorClicked) {
                display.value = ""; // Clear the display if an operator was clicked previously
                isOperatorClicked = false;
            }
              
             equation += value
            display.value += value;
        }

        function appendOperator(operator) {
            isOperatorClicked = true;
            appendValue(operator);
        }

        function clearDisplay() {
            equation = "";
            display.value = "";
        }

        function deleteLastCharacter() {
            equation = equation.slice(0, -1);
            display.value = equation;
        }

        function calculateResult() {
            try {
                let result = eval(equation);
                equation = result.toString();
                display.value = equation;
            } catch (error) {
                display.value = "Error";
            }try {
              // Replace the percentage symbol with the appropriate mathematical operation
              equation = equation.replace(/%/g, "*0.01");
    
              let result = eval(equation);
              equation = result.toString();
              display.value = equation;
            } catch (error) {
              display.value = "Error";
           }
        }