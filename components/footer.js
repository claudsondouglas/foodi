import { Box, Heading, Divider } from "@chakra-ui/core";
import { RiFacebookFill, RiInstagramLine, RiWhatsappLine } from "react-icons/ri";

export default function Footer() {
  return (
    <Box as="footer" padding={["1rem 2rem","2rem"]} marginTop="-3rem">
      <Divider color="gray.300" h="2px" marginY="1rem"/>
      <Box display={["block","flex"]} maxW={["unset","80%"]} marginY="2rem">
        <Box flex="1">
          <Box as="b" fontSize="lg" display="block" marginBottom=".8rem" color="dark">Alquimia</Box>
          <Box color="semi-dark" marginY="1rem">Quem somos nós?</Box>
          <Box color="semi-dark" marginY="1rem">Fale conosco</Box>
        </Box>
        <Box flex="1">
          <Box as="b" fontSize="lg" display="block" marginBottom=".8rem" color="dark">Website</Box>
          <Box color="semi-dark" marginY="1rem">Cadastre seu restaurante</Box>
          <Box color="semi-dark" marginY="1rem">Delivre</Box>
          <Box color="semi-dark" marginY="1rem">Shopi</Box>
        </Box>
        <Box flex="1">
          <Box as="b" fontSize="lg" display="block" marginBottom=".8rem" color="dark">Social</Box>
          <Box as={RiFacebookFill} size="2rem" color="semi-dark" display="inline-block" marginRight=".5rem"/>
          <Box as={RiInstagramLine} size="2rem" color="semi-dark" display="inline-block" marginRight=".5rem"/>
          <Box as={RiWhatsappLine} size="2rem" color="semi-dark" display="inline-block" marginRight=".5rem"/>
        </Box>
      </Box>
      <Divider color="gray.300" h="2px" marginBottom="1rem"/>
      <Box display="flex" marginTop="2rem" alignItems="center">
        <Box marginRight="1rem" display={['none','block']}>
          <svg viewBox="0 0 49 43" fill="#25d366" width="50px" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.34 21.34c8.49 0 14.37-7.71 14.37-14 0-4.58-4.35-6.59-8.49-6.59-9.3 0-14.37 8.3-14.37 14 0 4.59 4.4 6.6 8.5 6.6zm22.66 0c8.49 0 14.37-7.71 14.37-14 0-4.58-4.36-6.59-8.49-6.59-9.3 0-14.37 8.3-14.37 14 0 4.59 4.4 6.6 8.5 6.6m3.91 14.41c-5.25 4.45-12.27 6.74-19.9 6.26A19.2 19.2 0 0 1 .36 26.5h.46a17.83 17.83 0 0 0 14.05 9.97c6.46.71 14.37-2.2 18.71-6.34l-4.87-3.67 14.47.04-3.11 15.25-2.16-5.98z"></path>
          </svg>
        </Box>
        <Box color="dark" fontSize={['xs','md']}>
          © Copyright 2020 - Alquimia - Todos os direitos reservados Alquimia Restaurante S.A.
          <br/>
          CNPJ 14.380.200/0001-21 / Avenida dos Alquimistia, nº 1234, Vila da Nuvem, Nordeste/Terra - CEP 02.XX-422
        </Box>
      </Box>
    </Box>
  )
}