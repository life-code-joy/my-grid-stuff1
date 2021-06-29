const woodPieces = (woodpieces) => {
  return woodpieces * 20;
};

const woodMachine = (wood) => {
  const totalWood = woodPieces(wood);

  return `The total pieces of wood are ${totalWood}`;
};

console.log(woodMachine(100));

//! change the css style
const codeCSS = document.querySelector('.changeMe');
const head3 = document.querySelector('.head3');

codeCSS.classList.add('change');
codeCSS.classList.add('head3');

// console.log(codeCSS);
