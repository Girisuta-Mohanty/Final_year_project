import React from 'react'
import { Faculty } from './FacultyApi'
import Navbar from './Navbar';
import { useState } from 'react';
import Faculties from './Faculties';
import images from "./images";
import ImageSlider from "./ImageSlider";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import YtVideo from './YtVideo';
import ImCara from './ImCara';
import Events from './Events';
// const uniqueList=[...new Set(Faculty.map((curElem)=>{
//     return curElem.category;
// })),"All"];
const MainPage = () => {
    // const [faculty,setFacultyData]=useState(Faculty);
    // const [MenuList,setMenuList]=useState(uniqueList);
    // const filterItem=(category)=>{
    //     if(category==='All'){
    //      setFacultyData(faculty);
    //      return;
    //     }
    //      const updatedList=Faculty.filter((curElem)=>{
    //          return curElem.category===category;
    //      });
    //      setFacultyData(updatedList);
    //  };
  return (
    <div>
       
       {/* <div  className='rowC'>
       
        </div> */}
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(480px, 1fr))'>
  <Card style={{height:"90vh"}}>
    <CardBody style={{height:"80vh"}}>   
    <ImCara/>
    <div style={{height:"10vh" , fontSize:"4rem"}}>WELCOME TO IIIT BHUBANESWAR</div>
    <YtVideo/>
    </CardBody>
  </Card>
  <Card style={{height:"90vh"}}>
  <Events/>
  </Card>
</SimpleGrid>
    </div>
  )
}

export default MainPage
