import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export default function CircularIndeterminate(): JSX.Element {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress
                size={120}
                sx={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                }}
            />
        </Box>
    )
}
