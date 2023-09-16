import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props{
    setSelectedPlatform: (PlatForm:Platform) => void
    selectedPlatform : Platform | null
}

const PlatFormSelector = ({setSelectedPlatform, selectedPlatform}:Props) => {
  const { data, error } = usePlatForms();
  if(error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((data) => (
          <MenuItem onClick={()=> setSelectedPlatform(data)} key={data.id}>{data.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
export default PlatFormSelector;
