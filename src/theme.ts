import {extendTheme, ThemeConfig} from "@chakra-ui/react"

const configObject:ThemeConfig ={
    initialColorMode:'dark'
};

const theme= extendTheme({configObject});

export default theme;

