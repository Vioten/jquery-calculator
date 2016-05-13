  var expression = "";
  var operator = "";
  var op1;
  var op2;
  var hasOp = false;
  $('.buttons').on("click", 'span', function() {
    expression += $(this).text();
    var input = $(this).text();
    if (input === 'C') {
      expression = "";
    }
    else if (input === '=') {
      evaluateExpression(expression, operator);
      console.log(op1 + " " + op2);
      expression = operate(op1, op2, operator);
    }
    else if (input === '+' || input === 'x' || input === '-' || input ===
      '\xF7') {
      if (hasOp === false) {
        operator = input;
        console.log(operator);
        hasOp = true;
      }
    }
    $('#screen').text(expression);
    console.log(expression);
  })

  function operate(op1, op2, oper) {
    switch (oper) {
      case 'x':
        return op1 * op2;
      case '+':
        return op1 + op2;
      case '-':
        return op1 - op2;
      case '\xF7':
        return op1 / op2;
    }
    return null;
  }

  function evaluateExpression(exp, oper) {
    var array = exp.split(oper);
    console.log(array);
    op1 = parseInt(array[0]);
    op2 = parseInt(array[1]);
    return array;
  }
