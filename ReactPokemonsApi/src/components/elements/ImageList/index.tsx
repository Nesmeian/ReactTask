import { ImageList, ImageListItem, Typography } from '@mui/material'
import { PokemonDetails, StatsColorsTypes } from '../../../interfaces'
import Stats from '../Stats'
import statsColors from '../Stats/pokemonsStatsColors'
import capitalizeFirst from '../../../utils/capitalizeFirst'
import calculateStat from '../../../utils/calculateStat'
import PokemonTypes from '../PokemonTypes'
export default function ImageListElement({
    pokemonsArray,
    cols,
}: {
    pokemonsArray: PokemonDetails[]
    cols: number
}): JSX.Element {
    return (
        <ImageList cols={cols}>
            {pokemonsArray.map((elem) => {
                const type = elem.types.map((e) => {
                    return e.type.name
                })
                const statsColor =
                    statsColors[type[0] as keyof StatsColorsTypes]
                const name = capitalizeFirst(elem.name)
                const stats: [string, number][] = elem.stats
                    .filter(
                        (e) =>
                            e.stat.name !== 'special-attack' &&
                            e.stat.name !== 'special-defense',
                    )
                    .map((e) => [e.stat.name, calculateStat(e.base_stat)])
                return (
                    <ImageListItem
                        key={elem.name}
                        onClick={() => console.log(elem.name)}
                        sx={{
                            maxWidth: '300px',
                            boxShadow: '0px 4px 4px 0px rgba(00,00,00,0.25)',
                            borderRadius: '10%',
                            margin: '5%',
                            padding: '5%',
                        }}
                    >
                        <img
                            srcSet={
                                elem.sprites.other.dream_world.front_default
                            }
                            src={elem.sprites.other.dream_world.front_default}
                            alt={elem.name}
                            style={{ objectFit: 'contain' }}
                            loading="lazy"
                        />
                        <Typography
                            gutterBottom
                            variant="h4"
                            sx={{ textAlign: 'center', fontWeight: 'bold' }}
                        >
                            {name}
                        </Typography>
                        <PokemonTypes type={type} />
                        <Stats color={statsColor} stats={stats}></Stats>
                    </ImageListItem>
                )
            })}
        </ImageList>
    )
}
