//FUNCION FLECHA

function mifuncion(a, b) {
  return a + b;
}
// 2. ********************* */
console.log(mifuncion(5, 6));

// Estructura de funcion

let salu2 = () => {};

//3. ********************* */
let saludo = (nombre) => {
  return "Saludos " + nombre;
};

console.log(saludo("Ferny"));

//4. ********************* */

let saludar = (nombre) => "saludos " + nombre;

console.log(saludar("Gonzalo"));

//5. Pasar multiples parametros  */

let suma = (a, b) => a + b;
console.log(suma(5, 8));

/**6. Crear objeto en funcion flecha */
let obj = () => ({ nombre: "NATALIA", edad: 80 });

//Llamamos al objeto

//let persona = obj().nombre;
console.log(obj().nombre);

//7. Arreglos

let arrfunc = () => [1, 2, 3, 4, 5];

// Como acceder al arreglo

console.log(arrfunc()[4]);
