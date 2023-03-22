import { Stack } from '@chakra-ui/react'
import React from 'react'
import Events from './Events'
import NewsCard from './newscard'
import { productData, responsive } from "./NApi";

function NewsEvents() {

  return (
    <div id='newsevents' class="root" style={{backgroundColor:'white'}} >
      <Stack
        spacing={1}
        direction={['column', 'column', 'row']} // Change direction to column on small screens and row on larger screens
        style={{
          padding: "30px 10px",
          width: '100%',
        }}
      >
        <div style={{ height: "60vh", paddingLeft:"10px"}}>
          <div style={{fontSize: '3rem', textAlign: 'left'}}>
            News
          </div>
          <div style={{height: "85%"}}>
            <NewsCard/>
          </div>
        </div>
        <div style={{height: "60vh",overflow:"hidden"}}><Events/></div>
      </Stack>
    </div>
  )
}

export default NewsEvents
