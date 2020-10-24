import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Heading, Divider, Image, Textarea, Button, CloseButton, Input } from "@chakra-ui/core";
import { RiAddLine, RiSubtractLine, RiCloseLine } from 'react-icons/ri'
import cartStore from '../utils/cartStore';

export default function Product({id, close}) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`${window.location.protocol}//${window.location.host}/api/product/${id}`).then(response => {
      setProduct(response.data);
    })
  }, [id])

  return product ? (
    <Box position="fixed" minH="100vh" bg="rgba(0, 0, 0, .8)"
      right={0}
      width="100%"
      bottom="0"
      top="0"
      zIndex="99"
      display="flex"
      justifyContent="flex-end"
    > 
      <Box bg="white" w="500px">
        <Box padding=".5rem">
          <CloseButton onClick={() => close()} as={RiCloseLine} color="primary.500" size="md"/>
        </Box>
        <Box display="flex" padding=".5rem">
          <Box flexBasis="30%">
            <Image src={product.image} alt={product.name} size="100%"/>
          </Box>
          <Box flex="1" marginLeft="1rem">
            <Heading as="h1" fontSize="xl">{ product.name }</Heading>
            <Box as="p">{ product.desc }</Box>
          </Box>
        </Box>
        <Divider color="gray.200"/>
        <Box padding="1rem">
          <Textarea placeholder="Algum comentario adicional?" resize="none" borderColor="gray.200"/>
          <Box display="flex" alignItems="center" marginTop="1rem">
            <Box flexBasis="35%">
              <Box display="flex" border="2px" borderColor="gray.200" 
                marginRight="1rem" borderRadius="md"
                minH="2.5rem"
              >
                <Box flex="1" display="flex" alignItems="center" justifyContent="center" onClick="() => setQuantity(product - 1)">
                  <Box as={RiSubtractLine} cursor="pointer" display="inline-block" size="20px" color="gray.600" color="primary.500"/>
                </Box>
                <Box flex="1" display="flex" alignItems="center" justifyContent="center" borderX="2px" borderColor="gray.200" color="gray.700" fontSize="lg">{ quantity }</Box>
                <Box flex="1" display="flex" alignItems="center" justifyContent="center" onClick={() => setQuantity(quantity + 1)}>
                  <Box as={RiAddLine} cursor="pointer" display="inline-block" size="20px" color="gray.600" color="primary.500"/>
                </Box>
              </Box>
            </Box>
            <Box flex="1">
              <Button bg="primary.500" color="white" width="100%" colorScheme="primary" display="flex" fontSize="sm" justifyContent="space-between"
                onClick={() => { 
                  cartStore.create({ 
                    _id: product._id,
                    image: product.image,
                    name: product.name,
                    quantity: quantity,
                    price: product.price
                  });
                  close();
                }}
              >
                <Box>R${ (product.price * quantity).toFixed(2) }</Box>
                <Box textAlign="left">Adicionar</Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  ) : ''
}