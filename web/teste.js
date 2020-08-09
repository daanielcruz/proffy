const array = [0, 9, 4, 7, 128, 42, -1, 301, -5];
const num = 8;

function buscarDivisivelPor(array, num) {
  let calc;
  const result = array.find((arrayNum) => {
    calc = arrayNum % num;
    if (arrayNum !== 0) return calc == 0;
  });

  if (!result) {
    console.log('Nenhum número válido encontrado!');
  } else {
    console.log(result);
  }
}

buscarDivisivelPor(array, 10);
