import Poke from "./Pokemon"

type PokemonResult = {
   count: number,
   next: string,
   previous: null | string, 
   results: Poke[]
}
export default PokemonResult;