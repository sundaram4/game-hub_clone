import { Badge } from "@chakra-ui/react";

interface Props{
    score:number;
}

export default function CriticScore({score}:Props) {
    let color = score > 75 ? 'green': score < 75 ? 'yellow' : '';

    return (
        <Badge fontSize={'14px'} borderRadius={'4px'} paddingX={2} colorScheme={color}>{score}</Badge>
    )
}