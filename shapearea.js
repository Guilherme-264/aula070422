/* shape-area.js */
const PI = Math.PI;

function areacirculo (raio){
return raio * raio * 3.14; 
}

module.exports.areacirculo = areacirculo;

module.exports.areaquadrado = function(lado){
	return lado * lado;
};