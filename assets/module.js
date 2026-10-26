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

for (let i = 1; i <= 151; i++) {
  const pokeapi = fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      resultado.innerHTML += `<div class="tarjeta"><img src="${response.sprites.other["official-artwork"].front_shiny}">
      <h1>${response.name} ${response.id}</h1></div>`;
      console.log(response.sprites.other["official-artwork"].front_shiny);
    //   img.src = response.sprites.other["official-artwork"].front_shiny;
    //   resultado.appendChild(img);
    })

    .catch((error) => {
      img.src =
        "https://as1.ftcdn.net/v2/jpg/05/12/16/70/1000_F_512167072_tfte9ElGy4DSyaIRtRoOtLcDe7LIot4c.jpg";
      resultado.appendChild(img);
    });
}
// await esperar(1000)
