const shapearea = require('./shapearea.js');

const ladoquadrado = process.argv[2]; 
const valorquadrado =  shapearea.areaquadrado(ladoquadrado);
console.log(`${ladoquadrado} area do quadrado é = ${valorquadrado}`);


const raiocirculo = process.argv[3]; 
const valorcirculo =  shapearea.areacirculo(raiocirculo);
console.log(`${raiocirculo} area do circulo é = ${valorcirculo}`);


