// Array amigos
const listaAmigos = [];

// Función para agregar amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const listaElemento = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    if (nombre === "") {
        alert("Por favor escribe un nombre.");
        return;
    }

    // Evitar nombres duplicados
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        input.value = "";
        return;
    }

    // Agregar a la lista y actualizar el HTML
    listaAmigos.push(nombre);

    const li = document.createElement("li");
    li.textContent = nombre;
    listaElemento.appendChild(li);

    input.value = ""; // Limpiar campo de entrada
    resultado.innerHTML = ""; // Limpiar resultado si existía uno anterior
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (listaAmigos.length < 2) {
        alert("Debes agregar al menos dos nombres para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}