
//Funcion para poner los numeros en la pantalla y hacer que se concatenen
function appendToDisplay(value){
    document.getElementById('display').value += value;
}

//Funcion para limpiar la pantalla del display
function clearDisplay(){
    document.getElementById('display').value = '';
}

//Funcion para eliminar el ultimo numero escrito por medio de un metodo que implica ponerse en la ultima posicion "-1" del Array
function deleteLast(){
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}

//Funcion para calcular el resultado por medio de una funcion "result" y otro metodo llamado eval y apoyandose de un "Catch error" para asegurarse de que no haya numeros imaginarios o resultados que provoquen que el programa se crashee
function calculateResult(){
    try{
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Expresión invalida');
    }
}