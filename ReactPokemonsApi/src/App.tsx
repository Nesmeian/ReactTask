import { createTheme, colors, ThemeProvider, Box } from '@mui/material'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import { useEffect, useState } from 'react'
import { PokemonDetails } from './utils/interfaces'
import { getDescription, getPokemons } from './services/api'
const theme = createTheme({
    typography: {
        fontFamily: 'LozangeNoCommercial, Arial, sans-serif',
    },
    palette: {
        secondary: {
            main: colors.orange[500],
        },
        mode: 'light',
    },
})
function App(): JSX.Element {
    const [pokemons, setPokemons] = useState<PokemonDetails[] | PokemonDetails>(
        [],
    )
    const [search, setSearch] = useState('')
    useEffect(() => {
        const fetchAndSetPokemons = async (): Promise<void> => {
            try {
                const allPokemons = await getPokemons(search)
                const pokemonsWithDescription = await getDescription(
                    allPokemons,
                    search,
                )
                setPokemons(pokemonsWithDescription)
            } catch {
                fetchAndSetPokemons()
            }
        }
        if (search) {
            fetchAndSetPokemons()
        } else {
            fetchAndSetPokemons() // Очистка состояния покемонов, если поиск пустой
        }
    }, [search])
    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <Header setSearch={setSearch} />
                <Main pokemons={pokemons} />
            </Box>
        </ThemeProvider>
    )
}

export default App
