import {Box, Flex, FlexProps, Img, Popover, PopoverContent, PopoverTrigger, Spinner, Text} from '@chakra-ui/react';
import {useEffect, useState} from 'react';

type SuggestionProduct = {
    name: string,
    description: string,
    imageUrl: string,
}

type GreenifyProps = {
    id: number
    props: FlexProps
}

const Greenify = ({id, props}: GreenifyProps) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Flex bg='white' borderRadius='100%' border='2px solid green' boxSize='45px' align='center'
                      justify='center' _hover={{transform: 'scale(1.2) rotate(-15deg)'}} cursor='pointer' {...props}>
                    <Img
                        src='https://img.uxwing.com/wp-content/themes/uxwing/download/nature-environment-ecology/herb-green-leaf-icon.png'
                        maxH='32px'
                        maxW='32px'
                        transform='rotate(35deg)'
                    />
                </Flex>
            </PopoverTrigger>
            <PopoverContent w='auto' h='auto'>
                <SuggestionBox id={id}/>
            </PopoverContent>
        </Popover>
    )
}

const SuggestionBox = ({id}: { id: number }) => {
    const [suggestion, setSuggestion] = useState<SuggestionProduct | undefined>(undefined)

    useEffect(() => {
        // When endpoint is ready, replace this with:
        // fetch(`https://645d4ce5e01ac61058a1d6ae.mockapi.io/api/getSuggestion/${id}`).then(res => res.json()).then(data => {
        //     setSuggestion(data[0])
        // })
        fetch(`https://645d4ce5e01ac61058a1d6ae.mockapi.io/api/getSuggestion`).then(res => res.json()).then(data => {
            setSuggestion(data[0])
        })
    }, [])

    if (!suggestion) return <Spinner/>

    return (
        <Box w='200px' minH='200px' bg='green.50'>
            <Img src={suggestion.imageUrl} alt={suggestion.name} maxW='200px' maxH='200px'/>
            <Text fontWeight='bold'>{suggestion.name}</Text>
            <Text>{suggestion.description}</Text>
        </Box>
    )
}


export default Greenify
