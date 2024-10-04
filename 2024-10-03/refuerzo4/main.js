const quitaRepetidos = (arr) => {
  let set = new Set();
  arr.forEach((elemento) => {
    set.add(elemento);
  });
  const arr2 = [];
  for (const element of set) {
    arr2.push(element);
  }
  return arr2;
};

const valor = quitaRepetidos([2, 2, 5, 2, 4, 5, 6, 2, 8, 5, 8, 2]);
console.log(valor);
