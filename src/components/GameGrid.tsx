
import {SimpleGrid, Text} from '@chakra-ui/react'
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
    const {data, error, isLoading} = useGames();
    const arr=[1, 2, 3, 4, 5]
    return(
        <>
        {error && <Text>{error}</Text> }
        {isLoading && arr.map((arr) => 
            <GameCardContainer>
                <GameCardSkeleton key={arr}/>
            </GameCardContainer>)}
        <SimpleGrid columns={{sm:1,md:2, lg:3, xl:5}} padding='10px' spacing={5}>
            {data.map( (game) => (
                <GameCardContainer>
                    <GameCard key={game.id} game={game}/>
                </GameCardContainer>
            ))}
        </SimpleGrid>
        </>
    )
}

export default GameGrid;