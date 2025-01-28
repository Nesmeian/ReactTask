import {
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from '@mui/material'
import { PokemonDetails } from '../../../utils/interfaces'
export default function ImageListElement({
    pokemonsArray,
    cols,
}: {
    pokemonsArray: PokemonDetails[]
    cols: number
}): JSX.Element {
    return (
        <ImageList cols={cols}>
            {pokemonsArray.map((elem) => (
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
    )
}
