import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatFormSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface gameQuery {
  Genre: Genre | null;
  Platform: Platform | null;
  sortOrder: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // larger than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenre={gameQuery.Genre}
            onSelectedGenre={(Genre) => setGameQuery({ ...gameQuery, Genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatFormSelector
            selectedPlatform={gameQuery.Platform}
            setSelectedPlatform={(Platform) =>
              setGameQuery({ ...gameQuery, Platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;


{
/*
  <div style={{display:"flex",marginBottom:"20px"}}>
    <div style={{ marginRight: "3em",paddingLeft:"10px" }}>
      <PlatFormSelector
        selectedPlatform={gameQuery.Platform}
        setSelectedPlatform={(Platform) =>
          setGameQuery({ ...gameQuery, Platform })
        }
      />
    </div>
    <div>
      <SortSelector />
    </div>
  </div>
*/
}
