import {HStack, Image} from '@chakra-ui/react'
import reactImage from "./assets/reactImage.svg"
import ColoModeSwitch from './ColorModeSwitch'
const NavBar=() => {
    return (
        <HStack justifyContent='space-between' padding = '10px'>
            <Image src="https://www.torryharris.com/images/this/this_logo_innerpages.svg" alt="React Logo" boxSize="60px " />
            <ColoModeSwitch/>
        </HStack>
    )
}

export default NavBar