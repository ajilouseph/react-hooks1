import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React,{useState} from "react";

export default function App() {

  let [counter,setcounter]=useState(0);

const addbutton=()=>{
  setcounter(++counter)
}
const negativebutton=()=>{
  setcounter(--counter)
}




  return (
    <>
    
      <Container sx={containershape}>
        <Box  sx={boxshape}>
          <Typography align="center" variant="h1" gutterBottom>
            {counter}
          </Typography>
          <Stack  direction="row" spacing={2} >
          <Button variant="contained" onClick={addbutton}>+</Button>
          <Button id="btn1" variant="contained"onClick={negativebutton}>-</Button>
          </Stack>
          
        </Box>
      </Container>
    </>
  );
}
const boxshape = {
  border: "1px Solid",
  backgroundColor: "yellow",
  height: "50%",
  width: "50%",
  marginTop: "25px",
  display :"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  boxShadow: " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  
};
const containershape={
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  height:"80vh"
  
  

  
};
