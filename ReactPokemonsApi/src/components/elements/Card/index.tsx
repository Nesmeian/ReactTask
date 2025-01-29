import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { PokemonDetails } from '../../../interfaces'
import Stats from '../Stats'
import statsColors from '../Stats/pokemonsStatsColors'

export default function CardElement({
    pokemonsArray,
}: {
    pokemonsArray: PokemonDetails[]
}): JSX.Element {
    const type = pokemonsArray[0].types.map((e) => {
        return e.type.name
    })
    const statsColor = statsColors[type[0]]
    const name =
        pokemonsArray[0].name.charAt(0).toUpperCase() +
        pokemonsArray[0].name.slice(1)
    return (
        <Card
            sx={{
                height: '85vh',
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
                <Typography
                    gutterBottom
                    variant="h5"
                    sx={{ textAlign: 'center' }}
                >
                    {type.map((e) => `${e[0].toUpperCase()}${e.slice(1)} `)}
                </Typography>
                <Stats color={statsColor} />
            </CardContent>
        </Card>
    )
}
