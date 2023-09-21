import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Main = () => {
  return (
    <div style={{width:'90%', position: "relative", top: "70px", left: "70px" }}>
      <Stack>
        <Typography variant="h5" gutterBottom>
          Website Development Tracler
        </Typography>
      </Stack>
      <Box

      sx={{
        
        marginTop:'40px',
        display:'flex',
        gap:'5px'
      }}>
        <Container sx={{boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px;',borderRadius:'5px'}}>
            <Typography>Task to do</Typography>
            <hr/>
        </Container>
        <Container  sx={{boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',borderRadius:'5px'}}>
        <Typography>In progress</Typography>
            <hr/>
        </Container>
        <Container  sx={{boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px;',borderRadius:'5px'}}>
        <Typography>Task done</Typography>
            <hr/>
            </Container>
      </Box>
    </div>
  );
};

export default Main;
