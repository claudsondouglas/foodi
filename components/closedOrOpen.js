import { Box, Heading, Image } from "@chakra-ui/core";
import { RiStore2Line } from 'react-icons/ri'

export default function closedOrOpen() {
  return (
    <Box h="200px" color="white" overflow="hidden" position="relative"
            >
      <Box style={{ filter: "blur(2px)", "backgroundSize":"100%" }} background="url(https://irp-cdn.multiscreensite.com/3a0c1a25/import/base/banner02.jpg) center center no-repeat;" h="100%" w="100%"
        position="absolute"
        left="0"
        top="0"
        zIndex="1"
      >
      </Box>
      <Box position="relative" zIndex="2" display="flex" alignItems="center" bg="rgba(75,75,75, .7)"
        padding="2rem" paddingX="4rem" h="100%"
      >
        <Box as={RiStore2Line} display="inline-block" size="85px" color="gray.600" flexBasis="90px" color="white"/>
        <Box flex="1" marginX="1rem">
          <Heading as="h1" fontSize="2xl">Loja fechada</Heading>
          <Box>Abre as 18h</Box>
          <Box color="whitesmoke" fontSize="sm">Rua Mark Zuckerberg, 123, Centro.</Box>
        </Box>
      </Box>
    </Box>
  )
}