import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import About from "./About";
import { Education, Work } from "./EducationAndWork";
import Skills from "./Skills";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: "#D4FFF3",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#0DAD8D"
}));

export default function Home() {
  return (
    <Box xs={{ flexGrow: 2 }}>
      <Grid style={{ margin: "0% 25%" }} container spacing={2} columns={2}>
        <Grid xs={2}>
          <Item className="BackgroundImage">
            <img
              className="Profilepic"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEJcL3fl6RxTw/profile-displayphoto-shrink_800_800/0/1606666713658?e=1670457600&v=beta&t=vilc5B5rzrBXNnV7MyyEPGX35-4O07yXXT3Vb55T8wQ"
              alt="profile picture"
            />
          </Item>
        </Grid>
        <Grid xs={2}>
          <Item className="BackgroundImage">
            <About />
          </Item>
        </Grid>

        <Grid md={1}>
          <Item className="BackgroundImage">
            <Education />
          </Item>
        </Grid>
        <Grid md={1}>
          <Item className="BackgroundImage">
            <Work />
          </Item>
        </Grid>

        <Grid md={2}>
          <Item className="BackgroundImage" style={{ textAlign: "Center" }}>
            <Skills />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
