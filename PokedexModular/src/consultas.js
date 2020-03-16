export const linkAPI = "https://pokeapi.co/api/v2/pokemon/";
export const nextLink = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

export function traerPokemonIndividual(consulta) {
  return fetch(consulta)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {})
    .catch(error => console.error("FALLÓ", error));
}

export async function traerPokemones(linkConsulta) {
  const respuesta = await fetch(linkConsulta);
  const json = await respuesta.json();
  return json;
}
