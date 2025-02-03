import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { PokemonDetails, StatsColorsTypes } from '../../../interfaces'
import Stats from '../Stats'
import statsColors from '../Stats/pokemonsStatsColors'
import capitalizeFirst from '../../../utils/capitalizeFirst'
import calculateStat from '../../../utils/calculateStat'
import PokemonTypes from '../PokemonTypes'

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
        .map((e) => [e.stat.name, calculateStat(e.base_stat)])
    return (
        <Card
            sx={{
                height: '65vh',
                position: 'relative',
                display: 'flex',
                maxWidth: '500px',
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
                    width: '100%',
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
                <PokemonTypes type={type} />
                <Stats color={statsColor} stats={stats} />
            </CardContent>
        </Card>
    )
}
