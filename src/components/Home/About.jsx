import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";

export default function About() {
  const year = new Date().getFullYear() - 1994;

  return (
    <Grid>
      <h2>About me</h2>
      <h3>{year} / Emmeloord / Webdeveloper</h3>
      <p>
        I'm a web developer. That focuses on the frontend coding like react but
        can also work on the backend with for example js mongoose.{" "}
        <p>
          I have experience with frontend frameworks like mui and bootstrap and
          backend servers like nosql and motoko.
        </p>
      </p>
      <p>My future goal is to become a full stack web developer</p>
    </Grid>
  );
}
