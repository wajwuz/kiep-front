import { Box, Heading } from "@chakra-ui/react";
import * as CSS from "csstype";

type SectionProps = {
    id: string;
    title: String;
    children?: JSX.Element | JSX.Element[];
}

export const Section = ({ id, title, children }: SectionProps) => (
    <Box id={id} margin={5} width="100%" display="grid" placeItems="center">
        <Heading marginBottom="3.75rem">{title}</Heading>
        {children}
    </Box>
)

type SectionCardProps = {
    minHeight: CSS.Property.MaxHeight | number,
    children?: JSX.Element | JSX.Element[];
}

export default Section;
