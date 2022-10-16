import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";

export default function skills() {
  return (
    <Grid xs={2} item zeroMinWidth>
      <h2> Skills </h2>
      <center>
        <table style={{ width: "100%", borderSpacing: "0px 5px" }}>
          <tr>
            <th>Frontend</th>
            <th>Backend</th>
            <th>Functional</th>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <td style={{ paddingLeft: "10%" }}>
              <tr>
                <td>HTML </td> <td>&#11088;&#11088;&#11088;&#11088;</td>
              </tr>
              <tr>
                <td>CSS </td> <td>&#11088;&#11088;&#11088;&#11088; </td>
              </tr>
              <tr>
                <td>React </td> <td>&#11088;&#11088;&#11088; </td>
              </tr>
              <tr>
                <td>JS </td> <td>&#11088;&#11088;&#11088;&#11088; </td>
              </tr>
            </td>

            <td style={{ paddingLeft: "10%" }}>
              <tr>
                <td>NoSQL </td> <td>&#11088;&#11088;&#11088; </td>
              </tr>
              <tr>
                <td>JS Mongoose </td> <td>&#11088;&#11088;&#11088; </td>
              </tr>
              <tr>
                <td>Motoko </td> <td>&#11088;&#11088; </td>
              </tr>
              <tr>
                <td>SQL </td> <td>&#11088;&#11088; </td>
              </tr>
            </td>

            <td style={{ paddingLeft: "10%" }}>
              <tr>
                <td>Dutch </td>{" "}
                <td>&#11088;&#11088;&#11088;&#11088;&#11088; </td>
              </tr>

              <tr>
                <td>Customer service </td>{" "}
                <td>&#11088;&#11088;&#11088;&#11088; </td>
              </tr>
              <tr>
                <td>English </td> <td>&#11088;&#11088;&#11088;&#11088; </td>
              </tr>
              <tr>
                <td>Teamwork </td> <td>&#11088;&#11088;&#11088;&#11088; </td>
              </tr>
            </td>
          </tr>
        </table>
      </center>
    </Grid>
  );
}
