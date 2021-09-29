function translate() {
  let number = parseInt(prompt(), 10);
  let base = parseInt(prompt(), 10);
  if (!isNaN(number) && !isNaN(base)) {
    console.log(number.toString(base));
  } else {
    console.log('Некорректный ввод!');
  }
}

function numbers() {
  let value1 = parseInt(prompt(), 10);
  if (isNaN(value1)) {
    console.log('Некорректный ввод!');
  } else {
    let value2 = parseInt(prompt(), 10);
    if (isNaN(value2)) {
      console.log('Некорректный ввод!');
    } else {
      console.log(`Ответ: ${value1 + value2}, ${value1 / value2}.`);
    }
  }
}