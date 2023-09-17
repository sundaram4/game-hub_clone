import { gameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const useGames = (gameQuery: gameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.Genre?.id,
        platforms: gameQuery.Platform?.id,
        ordering:gameQuery.sortOrder
      },
    },
    [gameQuery]
  );
export default useGames;
