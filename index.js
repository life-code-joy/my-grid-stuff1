const woodPieces = (woodpieces) => {
  return woodpieces * 20;
};

const woodMachine = (wood) => {
  const totalWood = woodPieces(wood);

  return `The total pieces of wood are ${totalWood}. That is insane actually!!!`;
};

console.log(woodMachine(100));

//! change the css style
const codeCSS = document.querySelector('.changeMe');
const head3 = document.querySelector('.head3');
const addContent1 = document.querySelector('.addContent1');
const addContent4 = document.querySelector('.addContent4');
addContent1.innerHTML = woodMachine(100);
addContent4.innerHTML = woodMachine(12200);

// codeCSS.classList.add('change');
// codeCSS.classList.add('head3');

// console.log(codeCSS);
