document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    let currentInput = '';
  
    document.querySelector('.buttons').addEventListener('click', function (event) {
      handleButtonClick(event.target);
    });
  
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        calculateResult();
      } else {
        const button = document.querySelector(`button[data-key="${event.key}"]`);
        if (button) {
          handleButtonClick(button);
        }
      }
    });
  
    function handleButtonClick(target) {
      if (target.tagName.toLowerCase() === 'button') {
        const buttonValue = target.getAttribute('data-value');
  
        if (buttonValue === 'AC') {
          currentInput = '';
        } else if (buttonValue === 'DEL') {
          currentInput = currentInput.slice(0, -1);
        } else if (buttonValue === '=') {
          calculateResult();
        } else {
          currentInput += buttonValue;
        }
  
        updateDisplay();
      }
    }
  
    function calculateResult() {
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = 'Error';
      }
      updateDisplay();
    }
  
    function updateDisplay() {
      display.value = currentInput;
    }
  });
  