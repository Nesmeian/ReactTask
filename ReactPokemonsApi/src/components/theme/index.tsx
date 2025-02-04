import { Theme } from '@emotion/react'
import { createTheme } from '@mui/material'

export default function getTheme(mode: 'light' | 'dark'): Theme {
    const theme = createTheme({
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
        },
        palette: {
            mode: mode,
        },
    })
    return theme
}
