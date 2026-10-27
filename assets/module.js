import pelota from "./json.json" with { type: "json" };
import { asincronia, promesa, intento } from "./async.js";

// MANEJO DE JSON
// console.log(pelota);
// console.log(pelota.peso);
// console.log(pelota.fabricante.direccion);

// MANEJO DE PROMESAS
// FUNCION ASINCRONA SIMPLE
// const objeto = await asincronia(pelota);

// console.log(objeto.textura);

// // LECTURA DE PROMESAS

// promesa()
//   .then((response) => {
//     console.log(response);
//   })

//   .catch((err) => {
//     console.error(err);
//   })
//   .finally(console.log("finalmente"));

// // TRY/CATCH
// intento(pelota);

// // CONSULTA FETCH
// const resultado = document.getElementById("resultado");
// const img = document.getElementById("img");

// const pokeapi = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response.sprites.other["official-artwork"].front_shiny);
//     img.src = response.sprites.other["official-artwork"].front_shiny;
//     resultado.appendChild(img);
//   })
//   .catch((error) => {
//     console.error("Ha ocurrido un error:", error);
//   });

const resultado = document.getElementById("contenedor-pokemon");
// const img = document.createElement("img");
// const esperar = (ms) => new Promise(resolve=>setTimeout(resolve, ms));
const modal = document.getElementById("modal-pokemon");
const botonCerrar = document.getElementById("cerrar-modal");
const detallePokemon = document.getElementById("detalle-pokemon");

// TAREA 1: CREAR LAS TARJETAS DE LOS PRIMEROS 151 POKEMONES

for (let i = 1; i <= 151; i++) {
  // 1. Agregar la conversión a JSON
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((res) => res.json()) // <- ESTO FALTABA
    .then((response) => {
      // Ahora 'response' sí tiene los datos del Pokémon
      const tipos = response.types.map((tipo) => tipo.type.name).join(" / ");

      // CREAR LA TARJETA
      // 2. Cambiar 'id' por 'data-id' en el div principal
      resultado.innerHTML += `
    <div class="tarjeta" data-id="${response.id}">
      <img src="${response.sprites.other["official-artwork"].front_default}">
      <h1>${response.name} ${response.id}</h1>
      <p>${tipos}</p>
    </div>
    `;
    })
    .catch((error) => {
      console.error("Error al cargar el Pokémon:", error);
    });
}

// DETECTAR EL CLICK EN UNA TARJETA

resultado.addEventListener("click", (event) => {
  const tarjeta = event.target.closest(".tarjeta");

  if (!tarjeta) {
    return;
  }

  const titulo = tarjeta.querySelector("h1").textContent;
  const id = titulo.trim().split(" ").pop();

  console.log("ID del Pokémon:", id);

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json()) // <- ESTO FALTABA
    .then((response) => {
      // Ahora 'response' sí tiene los datos del Pokémon
      const tipos = response.types.map((tipo) => tipo.type.name).join(" / ");

      // CREAR LA TARJETA
      // 2. Cambiar 'id' por 'data-id' en el div principal
      console.log(response.id)
  
    })
    .catch((error) => {
      console.error("Error al cargar el Pokémon:", error);
    });
});


// CERRAR EL MODAL CON EL BOTON

botonCerrar.addEventListener("click", () => {
  modal.close();
});

// CERRAR MODAL AL HACER CLICK FUERA DE SU CONTENIDO

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});


 modal.close();