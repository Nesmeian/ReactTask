export interface Pokemon {
    name: string
    url: string
}

export interface PokemonResponse {
    results: Pokemon[]
}

export interface PokemonDetails {
    id: number
    name: string
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    }
}
