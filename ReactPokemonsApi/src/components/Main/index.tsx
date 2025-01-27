import {
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from '@mui/material'
import checkWidth from '../utils/checkWidth'
import { PokemonDetails } from '../../utils/interfaces'

const Main = ({ pokemons }: { pokemons: PokemonDetails[] }): JSX.Element => {
    const cols = checkWidth()

    return (
        <ImageList cols={cols}>
            {pokemons.map((elem) => (
                <ImageListItem key={elem.name}>
                    <img
                        srcSet={elem.sprites.other.dream_world.front_default}
                        src={elem.sprites.other.dream_world.front_default}
                        alt={elem.name}
                        style={{ objectFit: 'contain' }}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={elem.name}
                        subtitle={elem.name}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${elem.name}`}
                            ></IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default Main
