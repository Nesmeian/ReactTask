import { ThemeProvider, Box } from '@mui/material'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import { useEffect, useState } from 'react'
import { StateTypes } from './interfaces'
import { getDescription } from './services/api'
import CircularIndeterminate from './utils/CircularIndeterminate'
import { useSelector, useDispatch } from 'react-redux'
import getTheme from './components/theme'

function App(): JSX.Element {
    const dispatch = useDispatch()
    const { search, pokemons, themeMode } = useSelector((state: StateTypes) => {
        return {
            search: state.search,
            pokemons: state.pokemons,
            themeMode: state.themeMode,
        }
    })
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const theme = getTheme(themeMode)
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            setLoading(true)
            try {
                await getDescription(dispatch, search)
            } catch {
                setError('Something went wrong')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [search, dispatch])

    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <Header />
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
