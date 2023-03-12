import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
const Base = ({ children }) => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box p={8} minH={'100vh'} style={{display:'inline-block',justifyContent:"center"}} padding={'15vh 0px'} overflowX={'hidden'}>
        {children}
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Base;