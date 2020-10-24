import { Box, Image } from "@chakra-ui/core";

export default function Item({ item, openProduct }) {
  return (
    <Box padding={[".5rem","1rem"]} border="2px" borderColor="gray.100"
      borderRadius="lg"
      width="100%"
      display="inline-flex"
      cursor="pointer"
      transition="border .3s"
      marginBottom={["1rem","unset"]}
      _hover={{ borderColor: 'gray.200' }}
      onClick={() => openProduct(item._id)}
    >
      { item.image ?
        <Box flexBasis={["calc(80px)","calc(100px + 1rem)"]} marginRight="1rem">
          <Image src={item.image} alt={item.name} w={["80px","100px"]} marginRight="1rem"/>
        </Box> : ''
      }
      <Box 
        minH={["80px","100px"]}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        flex="1"
      >
        <Box as="b" fontWeight="600" color="dark" fontSize="lg">{ item.name }</Box>
        <Box fontSize="sm" color="semi-dark">{ item.desc }</Box>
        <Box color="semi-dark">R${ item.price.toFixed(2) }</Box>
      </Box>
    </Box>
  )
}