export default async function fetchPokemons(): Promise<string> {
    return fetch('https://pokeapi.co/api/v2/pokemon/').then((response) =>
        response.json(),
    )
}
