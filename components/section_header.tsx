import { Box, Heading, Text } from "@chakra-ui/react";

type SectionProps = {
    title: String;
    description: String;
    children?: JSX.Element | JSX.Element[];
}

const Section = ({ title, description, children }: SectionProps) => (
    <Box margin={5} width="100%">
        <Heading>{title}</Heading>
        <Text marginTop={3} variant="secondary" marginBottom="2rem">{description}</Text>
        {children}
    </Box>
)

export default Section;
