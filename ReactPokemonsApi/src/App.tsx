import { createTheme, colors, ThemeProvider, Box } from '@mui/material'
const theme = createTheme({
    palette: {
        secondary: {
            main: colors.orange[500],
        },
        mode: 'dark',
    },
})
function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Box bgcolor={'background.default'} color={'text.primary'}>
                JACK
            </Box>
        </ThemeProvider>
    )
}

export default App
