import { Box, Heading, SquareProps, Text } from "@chakra-ui/react";

const ProTag = (props: SquareProps) => (
    <Box background="#000" padding="0.3rem 0.5rem" borderRadius="0.5rem" {...props}>
        <Text color="#FDC250" fontSize="0.8rem" fontWeight={600}>PRO</Text>
    </Box>
)

export default ProTag;
