import checkWidth from '../../../utils/checkWidth'
import { PokemonDetails } from '../../../interfaces'
import CardElement from '../../elements/Card'
import ImageListElement from '../../elements/ImageList'

const Main = ({
    pokemons,
    error,
}: {
    error: string | null
    pokemons: PokemonDetails[]
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
