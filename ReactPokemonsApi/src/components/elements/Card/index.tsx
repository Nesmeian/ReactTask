import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { PokemonDetails, StatsColorsTypes } from '../../../interfaces'
import Stats from '../Stats'
import statsColors from '../Stats/pokemonsStatsColors'
import capitalizeFirst from '../../../utils/capitalizeFirst'

export default function CardElement({
    pokemonsArray,
}: {
    pokemonsArray: PokemonDetails[]
}): JSX.Element {
    const type = pokemonsArray[0].types.map((e) => {
        return e.type.name
    })
    const statsColor = statsColors[type[0] as keyof StatsColorsTypes]
    const name = capitalizeFirst(pokemonsArray[0].name)
    const stats: [string, number][] = pokemonsArray[0].stats
        .filter(
            (e) =>
                e.stat.name !== 'special-attack' &&
                e.stat.name !== 'special-defense',
        )
        .map((e) => [e.stat.name, e.base_stat])
    return (
        <Card
            sx={{
                height: '65vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 4px 4px 0px rgba(00,00,00,0.25)',
                borderRadius: '10%',
                margin: '5%',
            }}
        >
            <CardMedia
                sx={{
                    height: '60%',
                    width: '60%',
                    backgroundSize: 'contain',
                }}
                image={pokemonsArray[0].sprites.other.dream_world.front_default}
                title={pokemonsArray[0].name}
            />
            <CardContent sx={{ minWidth: '250px' }}>
                <Typography
                    gutterBottom
                    variant="h4"
                    sx={{ textAlign: 'center', fontWeight: 'bold' }}
                >
                    {name}
                </Typography>
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
                <Stats color={statsColor} stats={stats} />
            </CardContent>
        </Card>
    )
}
