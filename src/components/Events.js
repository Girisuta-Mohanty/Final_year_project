import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Heading,Box,Text,StackDivider } from '@chakra-ui/react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
const Events = () => {
  return (
    <div className='eventscard'>
      <Card>
  <CardHeader>
    <Heading size='md'>Upcoming Events</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
        {/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(480px, 1fr))'> */}
        
        <div style={{ width: '100%', height:'60px',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <Card className='statcard'>
         <Stat style={{color:"white",backgroundColor:"#1b0d29"}}>
      
    <StatLabel>20</StatLabel>
   <StatHelpText>Feb </StatHelpText>
 </Stat>
         </Card>
         <Card className='summarycard'>
         <Box >  
 <Heading size='xs' textTransform='uppercase'>
           Advaita
         </Heading>
         <Text pt='2' fontSize='sm'>
         Advaita is the annual techno-cult fest of IIIT Bhubaneswar. It is a non-profit body that features events like Guest Lectures, Technical events, Tech and Cultural competition, 
         Art and photography exhibition.
         </Text> 
       </Box>
         </Card>
        </div>

        <div style={{ width: '100%', height:'60px',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <Card className='statcard'>
         <Stat style={{color:"white",backgroundColor:"#1b0d29"}}>
   <StatLabel >20</StatLabel>
   {/* <StatNumber>£0.00</StatNumber> */}
   <StatHelpText>Feb </StatHelpText>
 </Stat>
         </Card>
         <Card className='summarycard'>
         <Box >  
 <Heading size='xs' textTransform='uppercase'>
           Advaita
         </Heading>
         <Text pt='2' fontSize='sm'>
         Advaita is the annual techno-cult fest of IIIT Bhubaneswar. It is a non-profit body that features events like Guest Lectures, Technical events, Tech and Cultural competition, 
         Art and photography exhibition.
         </Text> 
       </Box>
         </Card>
        </div>

        <div style={{ width: '100%', height:'60px',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <Card className='statcard'>
         <Stat style={{color:"white",backgroundColor:"#1b0d29"}}>
   <StatLabel>20</StatLabel>
   {/* <StatNumber>£0.00</StatNumber> */}
   <StatHelpText>Feb </StatHelpText>
 </Stat>
         </Card>
         <Card className='summarycard'>
         <Box >  
 <Heading size='xs' textTransform='uppercase'>
           Advaita
         </Heading>
         <Text pt='2' fontSize='sm'>
         Advaita is the annual techno-cult fest of IIIT Bhubaneswar. It is a non-profit body that features events like Guest Lectures, Technical events, Tech and Cultural competition, 
         Art and photography exhibition.
         </Text> 
       </Box>
         </Card>
        </div>

        <div style={{ width: '100%', height:'60px',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <Card className='statcard'>
         <Stat style={{color:"white",backgroundColor:"#1b0d29"}}>
   <StatLabel>20</StatLabel>
   {/* <StatNumber>£0.00</StatNumber> */}
   <StatHelpText>Feb </StatHelpText>
 </Stat>
         </Card>
         <Card className='summarycard'>
         <Box >  
 <Heading size='xs' textTransform='uppercase'>
           Advaita
         </Heading>
         <Text pt='2' fontSize='sm'>
         Advaita is the annual techno-cult fest of IIIT Bhubaneswar. It is a non-profit body that features events like Guest Lectures, Technical events, Tech and Cultural competition, 
         Art and photography exhibition.
         </Text> 
       </Box>
         </Card>
        </div>

        <div style={{ width: '100%', height:'60px',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <Card className='statcard'>
         <Stat style={{color:"white",backgroundColor:"#1b0d29"}}>
   <StatLabel>20</StatLabel>
   {/* <StatNumber>£0.00</StatNumber> */}
   <StatHelpText>Feb </StatHelpText>
 </Stat>
         </Card>
         <Card className='summarycard'>
         <Box >  
 <Heading size='xs' textTransform='uppercase'>
           Advaita
         </Heading>
         <Text pt='2' fontSize='sm'>
         Advaita is the annual techno-cult fest of IIIT Bhubaneswar. It is a non-profit body that features events like Guest Lectures, Technical events, Tech and Cultural competition, 
         Art and photography exhibition.
         </Text> 
       </Box>
         </Card>
        </div>
        <div style={{ width: '100%', height:'60px',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <Card className='statcard'>
         <Stat style={{color:"white",backgroundColor:"#1b0d29"}}>
   <StatLabel>20</StatLabel>
   {/* <StatNumber>£0.00</StatNumber> */}
   <StatHelpText>Feb </StatHelpText>
 </Stat>
         </Card>
         <Card className='summarycard'>
         <Box >  
 <Heading size='xs' textTransform='uppercase'>
           Advaita
         </Heading>
         <Text pt='2' fontSize='sm'>
         Advaita is the annual techno-cult fest of IIIT Bhubaneswar. It is a non-profit body that features events like Guest Lectures, Technical events, Tech and Cultural competition, 
         Art and photography exhibition.
         </Text> 
       </Box>
         </Card>
        </div>
        <div style={{ width: '100%', height:'60px',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
         <Card className='statcard'>
         <Stat style={{color:"white",backgroundColor:"#1b0d29"}}>
   <StatLabel>20</StatLabel>
   {/* <StatNumber>£0.00</StatNumber> */}
   <StatHelpText>Feb </StatHelpText>
 </Stat>
         </Card>
         <Card className='summarycard'>
         <Box >  
 <Heading size='xs' textTransform='uppercase'>
           Advaita
         </Heading>
         <Text pt='2' fontSize='sm'>
         Advaita is the annual techno-cult fest of IIIT Bhubaneswar. It is a non-profit body that features events like Guest Lectures, Technical events, Tech and Cultural competition, 
         Art and photography exhibition.
         </Text> 
       </Box>
         </Card>
        </div>
     

    </Stack>
  </CardBody>
</Card>
    </div>
  )
}

export default Events
