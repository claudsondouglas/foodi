import { Box, Heading, Input, Icon, useDisclosure, Divider, Stack, Button, Image } from "@chakra-ui/core";
import { 
  RiMapPinLine,
  RiShoppingBagLine,
  RiGiftLine,
  RiCloseLine
 } from "react-icons/ri";
 import { 
  Fade, 
} from "@chakra-ui/transition"
import {useEffect, useState} from 'react';
import cartStore from '../utils/cartStore';
import addressStore from '../utils/addressStore';
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [addres, setAddres] = useState(null);

  useEffect(() => {
    setAddres(addressStore.get());
  }, [isOpen]);

  return (
    <Box as="nav"
      padding="1rem" 
      paddingX={["1rem","10"]}
      display="flex" 
      alignItems="center"
      flexWrap={["wrap","unset"]}
    >
      <Box position="relative" width="auto" flex=".5" cursor="pointer">
    <Link href="/"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="100px" viewBox="0 0 647.000000 341.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,341.000000) scale(0.100000,-0.100000)"
fill="#25d366" stroke="none">
<path d="M1145 3199 c-204 -18 -370 -105 -492 -258 -42 -54 -124 -209 -137
-261 -12 -49 -22 -55 -103 -60 l-77 -5 -23 -110 c-12 -60 -22 -113 -23 -117 0
-5 33 -8 74 -8 41 0 77 -4 80 -8 3 -5 -6 -62 -19 -128 -14 -65 -57 -276 -96
-469 -39 -192 -90 -447 -115 -565 -24 -118 -44 -222 -44 -230 0 -13 32 -15
225 -15 218 0 226 1 230 20 3 11 9 45 15 75 5 30 19 98 30 150 12 52 27 127
34 165 14 71 69 345 81 400 3 17 14 71 24 120 66 325 82 405 92 443 l12 42
171 0 172 0 18 93 c10 50 20 106 23 122 l5 30 -165 0 c-91 0 -169 3 -173 7
-13 14 30 171 59 215 55 82 72 88 237 87 109 -1 156 -5 189 -17 24 -10 49 -17
56 -17 7 0 17 26 24 63 6 34 16 88 23 121 15 73 10 78 -110 99 -110 20 -195
25 -297 16z"/>
<path d="M5844 3195 c-3 -8 -20 -87 -38 -177 l-33 -163 226 -5 c124 -3 227 -5
228 -5 1 1 7 25 12 55 11 60 47 239 57 283 l6 27 -226 0 c-189 0 -228 -2 -232
-15z"/>
<path d="M5249 3178 c-1 -2 -27 -124 -58 -273 l-58 -270 -39 2 c-193 10 -260
6 -339 -20 -124 -41 -226 -107 -340 -222 -221 -220 -355 -504 -355 -752 0
-171 108 -314 256 -336 51 -8 192 8 259 30 117 37 237 116 285 186 16 24 33
37 48 37 12 0 22 -2 22 -4 0 -2 -13 -53 -29 -115 l-29 -111 228 0 228 0 16 73
c77 351 292 1441 314 1590 l28 187 -218 0 c-120 0 -218 -1 -219 -2z"/>
<path d="M1850 2635 c-258 -52 -490 -231 -634 -487 -78 -140 -125 -352 -106
-474 13 -79 22 -104 61 -160 41 -60 74 -89 144 -129 116 -65 273 -92 435 -74
362 39 686 312 806 679 24 75 28 101 28 220 1 130 0 137 -27 189 -87 164 -273
252 -527 250 -63 0 -144 -7 -180 -14z"/>
<path d="M3340 2635 c-141 -31 -288 -102 -388 -189 -162 -143 -274 -315 -328
-510 -25 -87 -29 -252 -9 -321 48 -168 204 -276 439 -304 226 -27 448 38 658
194 111 82 210 207 283 360 67 139 90 231 89 355 -1 130 -26 193 -108 276
-107 107 -247 155 -450 153 -67 0 -150 -7 -186 -14z"/>
<path d="M5724 2615 c-3 -9 -38 -183 -194 -960 -33 -164 -58 -305 -56 -312 4
-10 54 -13 221 -13 l215 0 11 27 c8 23 62 276 104 493 56 287 77 390 85 420 5
19 17 73 26 120 8 47 20 105 25 130 4 25 11 57 13 72 l5 27 -226 3 c-144 2
-227 -1 -229 -7z"/>
<path d="M1034 1183 c2 -10 14 -54 26 -98 29 -105 94 -243 166 -352 70 -105
231 -268 333 -336 84 -57 261 -142 323 -156 359 -82 630 -80 953 10 210 58
443 174 602 300 43 35 64 47 68 37 63 -174 81 -225 102 -286 14 -40 27 -71 29
-69 2 2 40 181 84 398 44 217 89 433 99 482 l19 87 -459 0 c-252 0 -459 -2
-459 -4 0 -2 67 -55 150 -117 172 -131 168 -111 40 -209 -369 -280 -909 -405
-1298 -301 -310 84 -600 311 -733 574 -27 53 -57 79 -45 40z"/>
</g>
</svg></Link>
      </Box>

      <Box display="flex" flex="2" marginX="2rem" display={["none","block"]}>
        <Input placeholder="Buscar no cardápio"
          bg="gray.100"
          borderColor="gray.100"
          padding="1.5rem"
          _focus={{
            outline: "none",
          }}
         />
      </Box>

      <Box
        display="flex"
        bg={['gray.100','unset']} 
        flex="1" flexDirection="column" 
        order={[4, "unset"]} flexBasis={["100%","unset"]}
        marginX={["-1rem","unset"]}
        marginBottom={["-1rem","unset"]}
        marginTop={["1rem","unset"]}
        padding={["1rem","unset"]}
      >
        <Box color="gray.500" lineHeight="1" fontWeight="500" fontSize="13px">ENTREGAR EM:</Box>
        <Box display="flex" alignItems="center" marginTop=".2rem" color="gray.800" _hover={{ color: 'primary.600'}}
          transition=".4s" cursor="pointer"
          onClick={onToggle}
        >
          <Box as={RiMapPinLine} display="inline-block" size="17px"  marginRight=".2rem"/>
          <Box as="span" fontSize="16px" lineHeight="1">{ addres == null ? 'Informe o endereço' : addres.street}</Box>
        </Box>
        <Fade timeout={350} in={isOpen}>
        { () => (
          <Address onToggle={onToggle}/>
        )}
        </Fade>
      </Box>

      <Box flex="2" display="flex" justifyContent="flex-end" alignItems="center">
        <Cart />
      </Box>
    </Box>
  )
}

function Cart () {
  const { isOpen, onToggle } = useDisclosure();
  const [ items, setItems ] = useState([]);
  const [ total, setTotal ] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setItems(cartStore.all())
    setTotal(() => cartStore.total())
  }, [isOpen]);

  return (
    <Box position="relative">
      <Box onClick={onToggle} cursor="pointer" color="gray.600" _hover={{ color: 'primary.600' }}
        transition="color .4s"
      >
        <Box as={RiShoppingBagLine} display="inline-block" fontSize={["2.2rem","1.6rem"]} color="currentColor"/>
        { items.length > 0 ? <Box fontSize="8px" bg="primary.600" color="white" alignItems="center" justifyContent="center"
          borderRadius="100%" w=".8rem" h=".8rem" display="inline-flex" position="relative" left="-.7rem" top=".6rem"
          marginRight="-.5rem"
        /> : '' }
        <Box as="span" position="relative" top=".2rem" display={['none','unset']}>
          Sacola
        </Box>
      </Box>
      <Fade timeout={500} in={isOpen}>
        { () => (
          <Box position="fixed" zIndex="999" top="0rem" left="0" w="100%" minH="100vh">
          <Box bg="rgba(0,0,0,.5)" w="100%" minH="100vh" position="absolute" top="0" left="0"
          onClick={onToggle}
          ></Box>
          <Box bg="white" position="absolute" right="0"
            minW="350px" minH="100vh"
          >
            { 
              items.map((item, index) => (
                <Box key={index} display="flex" cursor="pointer"
                transition=".3s"
                _hover={{ bg: 'whitesmoke' }}>
                  <Box padding="1rem" flex="1">
                    <Box fontSize="lg">
                      <b>{ item.quantity }x</b> {item.name}
                    </Box>
                    <Box>R${ item.price }</Box>
                  </Box>
                  <Box flexBasis="10%" display="flex" justifyContent="center" alignItems="flex-start" marginY="1rem">
                    <Box as={RiCloseLine} size="22px" onClick={() => { 
                      cartStore.remove(index)
                      setItems(cartStore.all())
                    }}/>
                  </Box>
                </Box>
              ))
            }
            { items.length > 0 ? (
            <Box w="100%" padding="1rem">
            <Button colorScheme="primary" w="100%" display="flex"
              onClick={() => {
                router.push('/pedido')
              }}
            >
              <Box flex="1" textAlign="left">Fazer pedido</Box>
              <Box flex=".3" textAlign="right">R${ total.toFixed(2) }</Box>
            </Button>
            </Box>) : ''
            }
          </Box>
          </Box>
         )
        }
      </Fade>
    </Box>
  )
}
/**/
function Address({ onToggle }) {

  function submit (event) {
    addressStore.update({
      street: event.target.street.value,
      number: event.target.number.value,
      neighb: event.target.neighb.value
    })
    event.preventDefault();
    onToggle();
    //setAdress({value: event.target.value});
  }
  return (
    <Box width="100vw" height="100vh" background="rgba(0,0,0,.5)" position="fixed" zIndex="999" left="0"
      top="0" display="flex" alignItems="center" justifyContent="center"
    >
      <Box width="500px" minH="300px" bg="white" rounded="md">
        <Box display="flex" justifyContent="flex-end" padding=".5rem">
          <Box as={RiCloseLine} size="26px" color="primary.600" onClick={onToggle} cursor="pointer"/>
        </Box>
        <Box padding="0rem 3rem">
          <Heading color="gray.800" fontSize="2xl">Digite seu endereço</Heading>
          <form onSubmit={submit}>
          <Stack spacing={3} marginTop="1rem">
            <Box display="flex">
              <Box flex="1">
                <label>Rua</label>
                <Input borderColor="gray.300" name="street" placeholder="Ex: Av. Brasil"/>
              </Box>
              <Box flexBasis="20%" marginLeft=".8rem">
                <label>Número</label>
                <Input borderColor="gray.300" type="number" name="number" placeholder="Ex: 123"/>
              </Box>
            </Box>
            <Box>
              <label>Bairro</label>
              <Input borderColor="gray.300" name="neighb" placeholder="Ex: Vila Verde"/>
            </Box>
            <Button type="submit" marginBottom="3.8rem" colorScheme="primary">
              Definir
            </Button>
          </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  )
}