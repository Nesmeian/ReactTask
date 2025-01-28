import checkWidth from '../../../utils/checkWidth'
import { PokemonDetails } from '../../../utils/interfaces'
import CardElement from '../../elements/Card'
import ImageListElement from '../../elements/ImageList'

const Main = ({
    pokemons,
    error,
}: {
    error: string | null
    pokemons: PokemonDetails[] | PokemonDetails
}): JSX.Element => {
    const cols = checkWidth()
    const pokemonsArray = Array.isArray(pokemons) ? pokemons : [pokemons]
    if (error) {
        return <div>{error}</div>
    }
    return (
        <>
            {pokemonsArray.length > 1 ? (
                <ImageListElement cols={cols} pokemonsArray={pokemonsArray} />
            ) : (
                pokemonsArray.length === 1 && (
                    <CardElement pokemonsArray={pokemonsArray} />
                )
            )}
        </>
    )
}

export default Main
