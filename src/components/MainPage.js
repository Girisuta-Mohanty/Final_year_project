import React from 'react'
import { Faculty } from './FacultyApi'
import Navbar from './Navbar';
import { useState } from 'react';
import Faculties from './Faculties';
const uniqueList=[...new Set(Faculty.map((curElem)=>{
    return curElem.category;
})),"All"];
const MainPage = () => {
    const [faculty,setFacultyData]=useState(Faculty);
    const [MenuList,setMenuList]=useState(uniqueList);
    const filterItem=(category)=>{
        if(category==='All'){
         setFacultyData(faculty);
         return;
        }
         const updatedList=Faculty.filter((curElem)=>{
             return curElem.category===category;
         });
         setFacultyData(updatedList);
     };
  return (
    <div>
       <Navbar filterItem={filterItem} MenuList={MenuList} />
    </div>
  )
}

export default MainPage
