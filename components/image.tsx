import { Image, ImageProps } from '@chakra-ui/react'

export function OutlinedImage(props: ImageProps) {
    return <Image
        border="0.7rem solid"
        style={{
            borderImageSlice: 1,
            borderImageSource: "linear-gradient(180deg, rgba(148,179,253,1) 0%, rgba(36,38,43,0) 100%)",
        }}
        alt=""
        {...props}
    />
}

