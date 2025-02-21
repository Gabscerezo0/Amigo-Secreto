const nombres = [];
const listaAmigos = document.getElementById('listaAmigos');
const amigoInput = document.getElementById('amigo');
const resultadoLista = document.getElementById('resultado');

// Función para agregar un nombre a la lista
function agregarAmigo() {
    // Obtiene el valor del campo de entrada y elimina espacios en blanco al inicio y al final
    const nombre = amigoInput.value.trim();

    // Verifica si el nombre no está vacío
    if (nombre) {
        nombres.push(nombre);
        const li = document.createElement('li');
        li.textContent = nombre; 
        listaAmigos.appendChild(li);
        amigoInput.value = '';
    } else {
        // Muestra una alerta si el usuario intenta agregar un nombre vacío
        alert('Por favor, ingrese un nombre válido.');
    }
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    // Verifica si hay al menos dos nombres en el array de nombres
    if (nombres.length < 2) {
        // Muestra una alerta si no hay suficientes participantes para el sorteo
        alert('Se necesitan al menos 2 participantes para el sorteo.');
        return; // Detiene la ejecución de la función
    }

    // Limpia los resultados anteriores
    resultadoLista.innerHTML = '';
    // Genera un índice aleatorio dentro del rango del array de nombres
    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    // Obtiene el nombre del amigo secreto del array de nombres usando el índice aleatorio
    const amigoSecreto = nombres[indiceAleatorio];

    // mostrar el resultado del sorteo
    const resultadoLi = document.createElement('li');
    resultadoLi.textContent = `El amigo secreto es: ${amigoSecreto}`; 
    resultadoLista.appendChild(resultadoLi);

    // Oculta la lista de nombres después de mostrar el resultado
    listaAmigos.style.display = 'none';
    // Limpia el array de nombres para permitir nuevos ingresos
    nombres.length = 0;
    // Limpia la lista de nombres visible
    listaAmigos.innerHTML = "";
    // Limpia el campo de entrada
    amigoInput.value = "";

    // Muestra la lista de nombres después de un breve retraso (3 segundos)
    setTimeout(() => {
        listaAmigos.style.display = "block";
    }, 3000);
}