//FUNCIONES
/*01 function hello(){
console.log('Hola Js');
console.log('Hola html');
console.log('Hola css');

}

hello();*/

//02 retorno de una funcion

/*function hello(){

    return "hola Js";
}

const result = hello();
console.log(result);
//hello();*/

//03 retorna objeto vacio

/*function hello(){

    return {};
}

//const result = hello();
console.log(hello());*/

//04 retorna valor del objeto
/*function hello(){
    return{
        nombre: 'Fernando'
    }
}
console.log(hello());*/

//05 funcion que retorna a otra funcion
/*function hello(){
    return function (){
        return "Hola Js"

    }

}
console.log(hello()());
*/

//=== USO DE PARAMETROS EN FUNCIONES ===
/*06 function hellpconJS(name){
    return 'Hola ' + name    

}

console.log(hellpconJS('Syzoth'));
*/

//07 pasar mas de un parametro a la funcion
/*function hellpconJS(x,y){
    return x + y;

}

console.log(hellpconJS(10,20));
console.log(hellpconJS(10,0));
*/

//08 control de errores en parametros
/*function hellpconJS(x,y=0){
    return x + y;

}
console.log(hellpconJS(10));
*/

//=== Objetos ===
const user = {
    nombre : 'Fernando',
    apellidoM : 'Valencia',
    edad:18,
    esoCivil: 'Soltera',
    domicilo : {
        ciudad : 'CDMX',
        calle : 'Cadiz',
        numero : 15
    },
    amigos:['Akane', 'Andre', 'Gonzalo'],
    activo:false,
    sendMensaje: function(){
        return 'enviando msj'
    }
    
}

alert(user.domicilo.ciudad + ',' + user.domicilo.calle + ',' + user.domicilo.numero);
console.log(user.amigos);
alert (user.activo);
console.log(user.nombre + user.apellidoM + user.edad)
alert(user.sendMensaje());