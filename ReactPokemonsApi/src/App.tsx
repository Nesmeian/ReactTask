import { createTheme, colors, ThemeProvider, Box } from '@mui/material'
import Header from './components/Header'
import Main from './components/Main'
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
    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                <Header></Header>
                <Main></Main>
            </Box>
        </ThemeProvider>
    )
}

export default App
