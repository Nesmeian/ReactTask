import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Typography,
} from '@mui/material'
import checkWidth from '../utils/checkWidth'
import { PokemonDetails } from '../../utils/interfaces'
import CircularIndeterminate from '../../utils/CircularIndeterminate'

const Main = ({
    pokemons,
}: {
    pokemons: PokemonDetails[] | PokemonDetails
}): JSX.Element => {
    const cols = checkWidth()
    const pokemonsArray = Array.isArray(pokemons) ? pokemons : [pokemons]
    console.log(pokemonsArray)
    return (
        <>
            {Array.isArray(pokemonsArray) && pokemonsArray.length > 1 ? (
                <ImageList cols={cols}>
                    {pokemonsArray.map((elem) => (
                        <ImageListItem key={elem.name}>
                            <img
                                srcSet={
                                    elem.sprites.other.dream_world.front_default
                                }
                                src={
                                    elem.sprites.other.dream_world.front_default
                                }
                                alt={elem.name}
                                style={{ objectFit: 'contain' }}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={elem.name}
                                subtitle={elem.description}
                                actionIcon={
                                    <IconButton
                                        sx={{
                                            color: 'rgba(255, 255, 255, 0.54)',
                                        }}
                                        aria-label={`info about ${elem.name}`}
                                    ></IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            ) : (
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
                    {pokemonsArray.length > 0 ? (
                        <>
                            <CardMedia
                                sx={{
                                    height: '60%',
                                    width: '60%',
                                    backgroundSize: 'contain',
                                }}
                                image={
                                    pokemonsArray[0].sprites.other.dream_world
                                        .front_default
                                }
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
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'text.secondary' }}
                                >
                                    {`Details about ${pokemonsArray[0].description}`}
                                </Typography>
                            </CardContent>
                        </>
                    ) : (
                        <CircularIndeterminate />
                    )}
                </Card>
            )}
        </>
    )
}

export default Main
