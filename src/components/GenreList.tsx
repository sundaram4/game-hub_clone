import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import CropedImageUrl from "../services/image-url";
import { useState } from "react";

interface Props{
  onSelectedGenre: (genre:Genre) => void;
  selectedGenre : Genre | null
}

function GenreList({selectedGenre,onSelectedGenre}:Props) {
  const { data, isLoading, error } = useGenres();
  //const [clickedGenre, setClickedGenre] = useState<Genre|null>(null);

  //console.log(genres)
  if (isLoading) return <Spinner/>
  if (error) return null
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={CropedImageUrl(genre.image_background)}
              />
            <Button fontWeight={selectedGenre?.id=== genre.id?"bold": "normal"} onClick={() => onSelectedGenre(genre)} variant={"link"} fontSize='lg'>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
export default GenreList;
