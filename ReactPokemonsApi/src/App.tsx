import { createTheme, colors, ThemeProvider, Box } from '@mui/material'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import { useEffect, useState } from 'react'
import { PokemonDetails } from './utils/interfaces'
import { getDescription, getPokemons } from './services/api'
import CircularIndeterminate from './utils/CircularIndeterminate'
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
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        const fetchAndSetPokemons = async (): Promise<void> => {
            setLoading(true)
            try {
                const allPokemons = await getPokemons(search)
                const pokemonsWithDescription = await getDescription(
                    allPokemons,
                    search,
                )
                setPokemons(pokemonsWithDescription)
            } catch {
                setError('Something go wrong')
            } finally {
                setLoading(false)
            }
        }
        if (search) {
            fetchAndSetPokemons()
        } else {
            fetchAndSetPokemons()
        }
    }, [search])
    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <Header setSearch={setSearch} />
                {loading ? (
                    <CircularIndeterminate />
                ) : (
                    <Main pokemons={pokemons} error={error} />
                )}
            </Box>
        </ThemeProvider>
    )
}

export default App
