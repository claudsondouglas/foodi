import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'
import { Heading, Box, Button, Stack } from "@chakra-ui/core";
import { 
  RiMapPinLine,
  RiBankCardLine,
  RiCurrencyLine,
  RiWhatsappLine
 } from "react-icons/ri";


export default function Checkout () {
  return (
    <>
    <Head>
      <title>Pedido</title>
    </Head>
    <Navbar/>
    <Box margin="3rem auto" maxW="600px">
      <Heading 
        color="gray.700"
        marginBottom="1rem"
        lineHeight="1.1"
      >
        Quase lá...
        <Heading as="h4" 
          lineHeight="1"
          fontSize="2xl"
          color="gray.600"
        >
            Informe alguns Dados
        </Heading>
      </Heading>
      <Stack spacing="1rem">
        <Box
          border="2px"
          borderColor="gray.200"
          borderRadius="md"
          padding="1rem"
          display="flex"
          alignItems="center"
        >
          <Box marginRight="1rem" display="flex" alignItems="center">
            <Box as={RiMapPinLine} fontSize="48px" color="gray.600"/>
          </Box>
          <Box flex="1" color="gray.600">
            <b>Endereço</b><br/>
            <Box lineHeight="1">
            Rua paranaue, N° 46
            <br/>
            Bairro parana.
            </Box>
          </Box>
        </Box>

        <Box
          border="2px"
          borderColor="gray.200"
          borderRadius="md"
          padding="1rem"
          display="flex"
          alignItems="center"
        >
          <Box marginRight="1rem" display="flex" alignItems="center">
            <Box as={RiCurrencyLine} fontSize="48px" color="gray.600"/>
          </Box>
          <Box flex="1" color="gray.600">
            <b>Pagamento</b><br/>
            <Box lineHeight="1" display="flex" alignItems="center">
              <Box as={RiBankCardLine} fontSize="20px" marginRight=".5rem"/>
              <Box as="span">Cartão de crédito</Box>
            </Box>
          </Box>
        </Box>
        <Box textAlign="right">
          <Button colorScheme="primary" w="100%">
            <Box as={RiWhatsappLine} size="24px" marginRight=".5rem"/>
            Finalizar Pedido
          </Button>
        </Box>
      </Stack>
    </Box>
    <Footer/>
    </>
  )
}