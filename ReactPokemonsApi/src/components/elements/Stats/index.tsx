import { Box, Stack } from '@mui/material'

export default function Stats(): JSX.Element {
    return (
        <Stack>
            <ProgressBar name="Strength" stats={30}></ProgressBar>
            <ProgressBar name="Speed" stats={70}></ProgressBar>
            <ProgressBar name="Weight" stats={20}></ProgressBar>
            <ProgressBar name="Skill" stats={60}></ProgressBar>
        </Stack>
    )
}
function ProgressBar({
    name,
    stats,
}: {
    name: string
    stats: number
}): JSX.Element {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Box sx={{ flex: '1 1' }}>{name}</Box>
            <Box
                height={'12px'}
                sx={{
                    flex: '3 1 0%',
                    borderRadius: '12px',
                    border: '2px solid #F0F0F3',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'yellow',
                        width: `${stats}%`,
                        borderRadius: '12px',
                        height: '85%',
                        margin: '1px',
                    }}
                ></Box>
            </Box>
        </Box>
    )
}
