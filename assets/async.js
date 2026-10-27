// FUNCION ASINCRONA SIMPLE
export async function asincronia(pelota) {
  return pelota;
}

// PROMESA
export async function promesa() {
  const validado = false;
  return new Promise((response, reject) => {
    if (validado) {
      response("todo bien");
    } else {
      reject("todo mal");
    }
  });
}

export function intento(pelota) {
  try {
    // CODIGO
    console.log(pelota);
    console.log(pelotas.direccion);
    console.log(pelota.fabricante.direccion);
  } catch (e) {
    // FRENO DE EMERGENCIA
    throw new Error(e);
  }
}

const resultado = document.getElementById("contenedor-pokemon");
// const img = document.createElement("img");
// const esperar = (ms) => new Promise(resolve=>setTimeout(resolve, ms));
const modal = document.getElementById("modal-pokemon");
const botonCerrar = document.getElementById("cerrar-modal");
const detallePokemon = document.getElementById("detalle-pokemon");

// TAREA 1: CREAR LAS TARJETAS DE LOS PRIMEROS 151 POKEMONES

for (let i = 1; i <= 151; i++) {
  const pokeapi = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      resultado.innerHTML += `<div class="tarjeta"><img src="${response.sprites.other["official-artwork"].front_default}">
      <h1>${response.name} ${response.id}</h1> ${response.types[0].type.name} ${response.types[1].type.name}</div>
      
      `;
      //ABRIR EL MODAL
      modal.showModal();

      // console.log(response.sprites.other["official-artwork"].front_default);
      //   img.src = response.sprites.other["official-artwork"].front_shiny;
      //   resultado.appendChild(img);
    })

    .catch((error) => {
      // img.src =
      //   "https://as1.ftcdn.net/v2/jpg/05/12/16/70/1000_F_512167072_tfte9ElGy4DSyaIRtRoOtLcDe7LIot4c.jpg";
      // resultado.appendChild(img);
      // console.error("Error al cargar los detalles:", error);
    });
}
// await esperar(1000)

// CERRAR EL MODAL CON EL BOTON

// // botonCerrar.addEventListener("click", () => {
//   modal.close();
// });

// // CERRAR MODAL AL HACER CLICK FUERA DE SU CONTENIDO
// modal.addEventListener("click", (event) => {
//   if (event.target === modal) {
//     modal.close();
//   }
// });

