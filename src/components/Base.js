import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
const Base = ({ children }) => {
  return (
    <Box>
      <Navbar></Navbar>
      <Box p={8} minH={'100vh'} padding={'11vh 0px'} overflowX={'hidden'}>
        {children}
      </Box>
      <Footer></Footer>
    </Box>
  );
};

export default Base;