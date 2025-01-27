import {
    Button,
    Card,
    CardActions,
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
            {Array.isArray(pokemonsArray) && pokemonsArray.length > 0 ? (
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
                                subtitle={elem.name}
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
                <Card sx={{ maxWidth: 345 }}>
                    {pokemonsArray.length > 0 ? (
                        <>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={
                                    pokemonsArray[0].sprites.other.dream_world
                                        .front_default
                                }
                                title={pokemonsArray[0].name} // Используйте имя покемона
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {pokemonsArray[0].name}{' '}
                                    {/* Используйте имя покемона */}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'text.secondary' }}
                                >
                                    {/* Добавьте описание или другую информацию о покемоне */}
                                    {`Details about ${pokemonsArray[0].name}`}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </>
                    ) : (
                        <Typography variant="body2" sx={{ padding: 2 }}>
                            Something went wrong
                        </Typography>
                    )}
                </Card>
            )}
        </>
    )
}

export default Main
