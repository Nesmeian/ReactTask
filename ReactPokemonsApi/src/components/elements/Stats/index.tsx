import { Box, Stack } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
export default function Stats({
    color,
    stats,
}: {
    color: string
    stats: [string, number][]
}): JSX.Element {
    return (
        <Stack>
            {stats.map((e) => (
                <ProgressBar
                    key={uuidv4()}
                    color={color}
                    name={e[0]}
                    stats={e[1]}
                />
            ))}
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
