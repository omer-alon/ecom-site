import {Flex, Image, Text, VStack} from '@chakra-ui/react';

type ProductProps = {
    name: string,
    price: string,
    description: string,
    image: string,
}

const Product = ({
                     name, price, description, image
                 }: ProductProps) => {
    return (
        <VStack textAlign='center' bg='white' border='2px solid gray' borderRadius='5px' w='320px' minH='350px' p='20px'
                justify='flex-top'>
            <Flex h='200px' align='center'><Image src={image} alt={name} maxW='300px' maxH='200px'/></Flex>
            <Text fontWeight='bold'>{name}</Text>
            <Text>Price: {price}</Text>
            <Text>{description}</Text>
        </VStack>
    )
}

export default Product
