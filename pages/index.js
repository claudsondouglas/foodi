import { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Product from '../components/product'
import Item from '../components/item'
import ClosedOrOpen from '../components/closedOrOpen'
import { Box, Heading, Image } from "@chakra-ui/core";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [productItem, setProductItem] = useState(null);

  useEffect(()=> {
    axios.get(`${window.location.protocol}//${window.location.host}/api/products`).then(response => {
      setProducts(response.data);
    })
  }, []);

  const close = () => setProductItem(null)
  const openProduct = (id) => setProductItem(id)

  return (
    <div>
      <Head>
        <title>Foodi</title>
      </Head>
      <Navbar />
      <Box as="main">
        <Box>
          <ClosedOrOpen/>
          <Box 
            padding={"2rem 10%"}
          >
            <Heading
              marginBottom="1rem"
              color="dark"
            >
              Menu
            </Heading>
            <Box 
              display={["block","grid"]}
              gridTemplateColumns="1fr 1fr"
              gridGap="1rem"
            > 
              {
                products.map((item, index) => {
                  return (
                    <Item key={item._id} item={ item }
                     openProduct={openProduct}/>
                  )
                })
              }
            </Box>
          </Box>
        </Box>
        {productItem ? <Product id={productItem} close={close}/> : ''}
      </Box>
      <Footer />
    </div>
  )
}