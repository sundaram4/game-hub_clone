import { Button, MenuList, Menu, MenuButton, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props{
    onSelectSortOrder: (sortOrder:string) => void
    sortOrder:string
}

const SortSelector = ({onSelectSortOrder, sortOrder}:Props) => {
    const sortOrders =[
        {value:'', label:'Relevance'},
        {value:'-added', label:'Date Added'},
        {value:'name', label:'Name'},
        {value:'-released', label:'Release date'},
        {value:'-metacritic', label:'Popularity'},
        {value:'-rating', label:'Average Rating'}
    ]

    const sortLabel = sortOrders.find((order) => order.value === sortOrder)

    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort By: {sortLabel?.label || "PlatForm"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
}
export default SortSelector;