import checkWidth from '../utils/checkWidth'
import { PokemonDetails } from '../../utils/interfaces'
import ImageListElement from '../ImageList'
import CardElement from '../Card'
import CircularIndeterminate from '../../utils/CircularIndeterminate'

const Main = ({
    pokemons,
}: {
    pokemons: PokemonDetails[] | PokemonDetails
}): JSX.Element => {
    const cols = checkWidth()
    const pokemonsArray = Array.isArray(pokemons) ? pokemons : [pokemons]
    return (
        <>
            {pokemonsArray.length > 1 ? (
                <ImageListElement cols={cols} pokemonsArray={pokemonsArray} />
            ) : pokemonsArray.length === 1 ? (
                <CardElement pokemonsArray={pokemonsArray} />
            ) : (
                <CircularIndeterminate />
            )}
        </>
    )
}

export default Main
