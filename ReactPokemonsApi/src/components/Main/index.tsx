import {
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from '@mui/material'
import checkWidth from '../utils/checkWidth'
import fetchPokemons from '../../services/api'
import { useEffect, useState } from 'react'
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
]
//
const Main = (): JSX.Element => {
    const cols = checkWidth()
    const [state, setState] = useState([])
    useEffect(() => {
        const take = async (): Promise<void> => {
            const pokemons = await fetchPokemons()
            const allPockemons = await Promise.all(
                pokemons.results.map(async (e) => {
                    const response = await fetch(e.url)
                    return response.json()
                }),
            )
            setState(allPockemons)
        }
        take()
    }, [])
    console.log(state)
    const img =
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
    return (
        <ImageList cols={cols}>
            {state.map((elem) => (
                <ImageListItem key={elem.name}>
                    <img
                        srcSet={`${elem.sprites.other.dream_world.front_default}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${elem.sprites.other.dream_world.front_default}?w=248&fit=crop&auto=format`}
                        alt={elem.name}
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
