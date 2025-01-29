import { Box, Stack } from '@mui/material'

export default function Stats({ color }: { color: string }): JSX.Element {
    return (
        <Stack>
            <ProgressBar name="Strength" color={color} stats={30}></ProgressBar>
            <ProgressBar name="Speed" color={color} stats={70}></ProgressBar>
            <ProgressBar name="Weight" color={color} stats={20}></ProgressBar>
            <ProgressBar name="Skill" color={color} stats={60}></ProgressBar>
        </Stack>
    )
}
function ProgressBar({
    name,
    stats,
    color,
}: {
    color: string
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
                        backgroundColor: `${color}`,
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
