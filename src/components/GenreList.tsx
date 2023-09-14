import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CropedImageUrl from "../services/image-url";

function GenreList() {
  const { data, isLoading, error } = useGenres();

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
            <Text fontSize='lg'>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
export default GenreList;
