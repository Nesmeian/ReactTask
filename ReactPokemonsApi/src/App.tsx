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
    const seacrh = 'pikachu'
    useEffect(() => {
        const fetchAndSetPokemons = async (): Promise<void> => {
            try {
                const allPockemons = await getPokemons(seacrh)
                const pokemonsWithDescription = await getDescription(
                    allPockemons,
                    seacrh,
                )
                setPokemons(pokemonsWithDescription)
            } catch (error) {
                console.error('Ошибка при загрузке покемонов:', error)
            }
        }

        fetchAndSetPokemons()
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <Header />
                <Main pokemons={pokemons} />
            </Box>
        </ThemeProvider>
    )
}

export default App
