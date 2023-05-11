import {Box, SimpleGrid, VStack} from '@chakra-ui/react';
import Product from './Product/Product.tsx';
import Greenify from './Greenify/Greenify.tsx';
import {useEffect, useState} from 'react';

const products = [
    {
        id: 1,
        name: 'Fine wiskey',
        description: 'The best of the best',
        price: '1000$',
        image: 'https://www.cgarsltd.co.uk/images/old_angus_5cl_1.jpg'
    },
    {
        id: 2,
        name: 'Pirate\'s rum',
        description: 'Arrrrg',
        price: '120',
        image: 'https://www.wine-searcher.com/images/labels/83/91/11028391.jpg?width=466&height=400&fit=bounds'
    },
    {
        id: 3,
        name: 'Disposable cups',
        description: 'For lame parties',
        price: '20$',
        image: 'https://img.fruugo.com/product/1/90/552787901_max.jpg'
    },
    {
        id: 4,
        name: 'Neon straws',
        description: 'For neon drinkers',
        price: '15$',
        image: 'https://img.fruugo.com/product/6/27/708224276_max.jpg'
    },
    {
        id: 5,
        name: 'Absolut vodka',
        description: 'For absolute people',
        price: '25$',
        image: 'https://icdn.bottlenose.wine/images/full/633432.jpg?fit=clip&h=798&w=798&auto=format&ixlib=imgixjs-3.6.1'
    },
    {
        id: 6,
        name: 'Colorful rubber balloons',
        description: 'To make your party pretty',
        price: '5$',
        image: 'https://img.fruugo.com/product/4/48/723142484_max.jpg'
    },
]

function App() {
    const [greenify, setGreenify] = useState<number[]>([])

    useEffect(() => {
        fetch('https://645d4ce5e01ac61058a1d6ae.mockapi.io/api/greenify').then(res => res.json()).then(data => {
            setGreenify(data)
        })
    }, [])

    return (
        <VStack h='100vh' w='full' bg='gray.50' justify='center' p='24px' overflowY='auto'>
            <SimpleGrid w='auto' h='auto' templateColumns='repeat(3, 1fr)' spacing='24px'>
                {products.map((product) => (
                    <Box position='relative'>
                        {greenify.includes(product.id) && (
                            <Greenify id={product.id} props={{position: 'absolute', top: '-8px', left: '-8px'}}/>)}
                        <Product key={product.id} {...product}/>
                    </Box>
                ))}
            </SimpleGrid>
        </VStack>
    )
}

export default App
