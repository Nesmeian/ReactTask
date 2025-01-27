import { createTheme, colors, ThemeProvider, Box } from '@mui/material'
import Header from './components/Header'
import Main from './components/Main'
import { useEffect, useState } from 'react'
import { PokemonDetails } from './utils/interfaces'
import { getPokemons } from './services/api'
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
    const [pokemons, setPokemons] = useState<PokemonDetails[]>([])
    useEffect(() => {
        const fetchAndSetPokemons = async (): Promise<void> => {
            try {
                const allPockemons = await getPokemons()
                setPokemons(allPockemons)
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
