import checkWidth from '../../../utils/checkWidth'
import { PokemonDetails } from '../../../utils/interfaces'
import CardElement from '../../elements/Card'
import ImageListElement from '../../elements/ImageList'

const Main = ({
    pokemons,
    error,
}: {
    error: string | null
    pokemons: PokemonDetails[] | PokemonDetails | false
}): JSX.Element => {
    const cols = checkWidth()
    const pokemonsArray = Array.isArray(pokemons)
        ? pokemons
        : pokemons === false
          ? false
          : [pokemons]
    if (error) {
        return <div>{error}</div>
    }
    return (
        <>
            {Array.isArray(pokemonsArray) && pokemonsArray.length > 1 ? (
                <ImageListElement cols={cols} pokemonsArray={pokemonsArray} />
            ) : Array.isArray(pokemonsArray) && pokemonsArray.length === 1 ? (
                <CardElement pokemonsArray={pokemonsArray} />
            ) : (
                <div>FInaly </div>
            )}
        </>
    )
}

export default Main
