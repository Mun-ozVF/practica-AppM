let task = ["comprar organos", "Estudiar", "golpear un bagabundo"];

console.log("lista de tareas", task);

task.push("cantar metal");

task.splice(0,0);

task.push("ir a casa")

//------------- usando porEach ---------------------

let tasks = ["comprar", "Estudiar", "limpiar casa", "ir a casa"]

tasks.forEach((tasks, index)=>{
    console.log(`Tarea ${index} ${tasks}`)
})