import { Stack } from '@chakra-ui/react'
import React from 'react'
import Events from './Events'
import NewsCard from './newscard'
import { productData, responsive } from "./NApi";

function NewsEvents() {
  return (
   <div id='newsevents' class="root" style={{   backgroundColor:'white'}} >
                <Stack spacing={1}
                    direction='row'
                    style={{padding:"40px 10px",
                        width: '100%',                   
                    }}
                 
                >
                
                <div style={
                        {
                            width: "70%",
                            height: "300px",
                            paddingLeft:"10px"
                            // backgroundColor: "red"
                        }
                    }>
                        <div style={
                            {
                                fontSize: '3rem',
                                textAlign: 'left'
                            }
                        }>
                            News
                        </div>

                        <div style={
                            {
                                height: "85%",
                               
                                // backgroundColor: "blue"
                            }
                        }>
                            <NewsCard/>
                        </div>
                    </div>
                    <div style={
                        {
                            width: "30%",
                            height: "300px",
                            // backgroundColor: "yellow"
                        }
                    }><Events/></div>
                </Stack>
                
   </div>
  )
}

export default NewsEvents