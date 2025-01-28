import checkWidth from '../../../utils/checkWidth'
import { PokemonDetails } from '../../../utils/interfaces'
import CardElement from '../../elements/Card'
import CircularIndeterminate from '../../../utils/CircularIndeterminate'
import ImageListElement from '../../elements/ImageList'

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
