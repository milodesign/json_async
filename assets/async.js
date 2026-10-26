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
