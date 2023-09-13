
import {SimpleGrid, Text} from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    const {games, error, isLoading} = useGames();
    const arr=[1, 2, 3, 4, 5]
    return(
        <>
        {error && <Text>{error}</Text> }
        {isLoading && arr.map((arr) => <GameCardSkeleton key={arr}/>)}
        <SimpleGrid columns={{sm:1,md:2, lg:3, xl:5}} padding='10px' spacing={10}>
            {games.map( (game) => (
                <GameCard key={game.id} game={game}/>
            ))}
        </SimpleGrid>
        </>
    )
}

export default GameGrid;