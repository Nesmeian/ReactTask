import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { PokemonDetails } from '../../../utils/interfaces'

export default function CardElement({
    pokemonsArray,
}: {
    pokemonsArray: PokemonDetails[]
}): JSX.Element {
    return (
        <Card
            sx={{
                height: '90vh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 'none',
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
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontSize: '5rem' }}
                >
                    {pokemonsArray[0].name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {pokemonsArray[0].description}
                </Typography>
            </CardContent>
        </Card>
    )
}
