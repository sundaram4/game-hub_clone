
import {SimpleGrid, Text} from '@chakra-ui/react'
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { gameQuery } from '../App';

interface Props{
    gameQuery : gameQuery 
}

const GameGrid = ({gameQuery}:Props) => {
    const {data, error, isLoading} = useGames(gameQuery);
    const arr=[1, 2, 3, 4, 5]
    return(
        <>
        {error && <Text>{error}</Text> }
        {isLoading && arr.map((arr) => 
            <GameCardContainer key={arr}>
                <GameCardSkeleton />
            </GameCardContainer>)}
        <SimpleGrid columns={{sm:1,md:2, lg:3, xl:5}} padding='10px' spacing={5}>
            {data.map( (game) => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game}/>
                </GameCardContainer>
            ))}
        </SimpleGrid>
        </>
    )
}

export default GameGrid;