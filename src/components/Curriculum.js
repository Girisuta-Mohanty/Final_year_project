import React from 'react'
import MyPdf from './First Year curr-1-2.pdf'
import MyPdf1 from './Syllabus.pdf'
import MyPdf2 from './Curriculum for ETC-2nd year.pdf'
import MyPdf3 from './2nd_Syllabus.pdf'
// import MyPdf4 from './2nd Year Syllabus.pdf'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const Curriculum = () => {
  return (
    <div className='head-text'  style={{minWidth:'300px'}}>
        <div className='head-image'>
        <img src="academic_calender_image.jpeg" style={{height:'50vh'}}/>
        <div className='text-on-image'>
        <h1><b>ETC Curriculum</b></h1>
       </div>
        </div>
       
   
  <TableContainer style={{width:'50%',marginLeft:'25%' ,marginTop:"30px"}}>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Our Electronics Curriculum</TableCaption>
    <Thead>
      <Tr style={{backgroundColor:"yellow"}}>
        <Th>Year</Th>
        <Th>Curriculum</Th>
        <Th >Syllabus</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1st Year</Td>
        <Td><a href={MyPdf} download="1st year curriculum.pdf">Download</a></Td>
        <Td><a href={MyPdf1} download="1styear_syllabus.pdf">Download</a></Td>
      </Tr>
      <Tr>
        <Td>2nd Year</Td>
        <Td><a href={MyPdf2} download="2nd year curriculum.pdf">Download</a></Td>
        <Td><a href={MyPdf3} download="2ndyear_syllabus.pdf">Download</a></Td>
      </Tr>
      <Tr>
      <Td>3rd Year</Td>
        <Td><a href={MyPdf2} download="2nd year curriculum.pdf">Download</a></Td>
        <Td><a href={MyPdf3} download="2ndyear_syllabus.pdf">Download</a></Td>
      </Tr>
      <Tr>
      <Td>4th Year</Td>
        <Td><a href={MyPdf2} download="2nd year curriculum.pdf">Download</a></Td>
        <Td><a href={MyPdf3} download="2ndyear_syllabus.pdf">Download</a></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

    </div>
  )
}

export default Curriculum
