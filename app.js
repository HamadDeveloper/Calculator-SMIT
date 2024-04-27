
function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  
  function calculate() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      if (value === '=') {
        calculate();
      } else if (value === 'clear') {
        clear();
      } else {
        appendToDisplay(value);
      }
    });
  });
  