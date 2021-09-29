function translate() {
  let number = parseInt(prompt(), 10);
  let base = parseInt(prompt(), 10);
  if (!isNaN(number) && !isNaN(base)) {
    console.log(number.toString(base));
  } else {
    console.log('Некорректный ввод!');
  }
}