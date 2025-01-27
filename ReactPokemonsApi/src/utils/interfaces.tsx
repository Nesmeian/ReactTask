export interface Pokemon {
    name: string // Имя покемона
    url: string // URL для получения дополнительной информации о покемоне
}

// Интерфейс для ответа от API с результатами
export interface PokemonResponse {
    results: Pokemon[] // Массив покемонов
}

// Интерфейс для информации о покемоне (например, после получения данных по URL)
export interface PokemonDetails {
    id: number // Уникальный идентификатор покемона
    name: string // Имя покемона
    sprites: {
        other: {
            dream_world: {
                front_default: string // URL изображения покемона
            }
        }
    }
    // Добавьте другие свойства по мере необходимости
}
