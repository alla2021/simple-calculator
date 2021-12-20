  let select = document.querySelector('#select-list');
  let firstNumber = document.querySelector('#first-num');
  let secondNumber = document.querySelector('#second-num');
  let result = document.querySelector('#result');
  let btn = document.querySelector('#btn');

  btn.addEventListener('click', calculator);

  function calculator() {
    let count;
    let number1 = parseInt(firstNumber.value);
    let number2 = parseInt(secondNumber.value);
    switch (select.value){
      case '+':
        count = number1 + number2;
        break;
      case '-':
        count = number1 - number2;
        break;
      case '*':
        count = number1 * number2;
        break;
      case '/':
        count = number1 / number2;
        break;     
    }
      if ((count ^ 0) === count) {
        result.textContent = count; 
      } else {
        result.textContent = 'Number is not integer';
    }
  }


