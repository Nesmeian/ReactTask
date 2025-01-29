import { Box, Typography } from '@mui/material'
import { StatsColorsTypes } from '../../../interfaces'
import statsColors from '../Stats/pokemonsStatsColors'
import capitalizeFirst from '../../../utils/capitalizeFirst'

export default function PokemonTypes({
    type,
}: {
    type: string[]
}): JSX.Element {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '5px',
                justifyContent: 'center',
            }}
        >
            {type.map((e) => {
                return (
                    <Typography
                        key={e}
                        gutterBottom
                        variant="h6"
                        sx={{
                            color: 'white',
                            padding: '0px 10px',
                            borderRadius: '12px',
                            background: `${statsColors[e as keyof StatsColorsTypes]}`,
                            textAlign: 'center',
                        }}
                    >
                        {capitalizeFirst(e)}
                    </Typography>
                )
            })}
        </Box>
    )
}
