const terminoBusqueda = 'System of a Down'; //termino que deseas buscar
const url =
`https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${terminoBusqueda}&format=json&origin=*`;

//funcion para obtener resultados de Wikipedia
async function buscarEnWikipedia() {
    try{
        const respuesta = await fetch(url); //llama a la Api de Wikipedia
        const datos = await respuesta.json(); //convierte la respuesta a JSON

        // Si hay resultados, mostrados en una lista
        const resultados = datos.query.search;

        if(resultados.length > 0) {
            document.getElementById('resultado').textContent = `Resultados de Busqueda para "${terminoBusqueda}":`;
            const listaResultados = document.getElementById('listaResultados'); 


            //recorrer los resultados y crear una lista de articulos
            resultados.forEach(resultado => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="https://es.wikipedia.org/wiki/${resultado.title}"target="_blank">${resultado.title} </a> - ${resultado.snippet}`;
                listaResultados.appendChild(li);
            });
        } else {
            document.getElementById('resultados').textContent = 'No se encontraron resultados.';
        }
    } catch(error){
 //En caso de error, mostrar un mensaje
 document.getElementById('resultados').textContent = 'Error al obtener los datos de Wikipedia.';
 console.error('Eror: ', error);
    }
}
//Llamar a la función para hacer la búsqueda cuando la página se carga
buscarEnWikipedia();