import {
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from '@mui/material'
import checkWidth from '../utils/checkWidth'
import fetchPokemons from '../../services/api'
import { useEffect, useState } from 'react'
import {
    Pokemon,
    PokemonDetails,
    PokemonResponse,
} from '../../utils/interfaces'

const Main = (): JSX.Element => {
    const cols = checkWidth()
    const [state, setState] = useState<PokemonDetails[]>([])
    useEffect(() => {
        const take = async (): Promise<void> => {
            const pokemons: PokemonResponse = await fetchPokemons()
            const allPockemons = await Promise.all(
                pokemons.results.map(async (e: Pokemon) => {
                    const response = await fetch(e.url)
                    return response.json() as Promise<PokemonDetails>
                }),
            )
            setState(allPockemons)
        }
        take()
    }, [])
    return (
        <ImageList cols={cols}>
            {state.map((elem) => (
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
