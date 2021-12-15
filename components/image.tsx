import NextImage from 'next/image'
import { Box, chakra } from '@chakra-ui/react'

const ChakraNextImage = chakra(NextImage, {
    shouldForwardProp: (prop) => true,
})

export function Image(props: any) {
    return <ChakraNextImage {...props} />
}

export function OutlinedImage(props: any) {
    return <Box
        border="0.7rem solid"
        style={{
            borderImageSlice: 1,
            borderImageSource: "linear-gradient(180deg, rgba(148,179,253,1) 0%, rgba(36,38,43,0) 100%)",
        }}
    >
        <Image {...props} />
    </Box>
}

