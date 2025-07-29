const res = document.getElementById('res');

function appendNum(n) {
  res.value += n;
}

function appendOp(op) {
  res.value += op;
}

function clearAll() {
  res.value = '';
}

function deleteLast() {
  res.value = res.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = res.value.replace('×', '*').replace('−','-');
    const result = eval(expression);
    res.value = result;
  } catch {
    res.value = 'Error';
  }
}

document.addEventListener('keydown', e => {
  const key = e.key;
  if ('0123456789.+-*/%'.includes(key)) appendNum(key);
  else if (key === 'Enter') calculate();
  else if (key === 'Backspace') deleteLast();
  else if (key.toLowerCase() === 'c') clearAll();
});
