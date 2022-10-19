import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";

function Education() {
  return (
    <Grid xs={2}>
      <table style={{ textAlign: "Centre" }}>
        <tr>
          <h2>Education</h2>
        </tr>

        <tr style={{ textAlign: "left" }}>
          <br />
          <li className="list">
            Complete Web Development Bootcamp certificate
            <p style={{ marginLeft: "25px", marginTop: "-2px" }}>
              The App Brewery
              <br />
              online Netherlands
              <br />
              01-10-2022
            </p>
          </li>
          <br />

          <li style={{ marginTop: "-20px" }}>
            Mendix Intermediate Developer certificate
            <p style={{ marginLeft: "25px", marginTop: "-2px" }}>
              Mendix online Netherlands <br />
              01-05-2022
            </p>
          </li>
          <br />
          <li style={{ marginTop: "-20px" }}>
            Mendix rapid Developer certificate{" "}
            <p style={{ marginLeft: "25px", marginTop: "-2px" }}>
              Mendix <br />
              01-04-2022 <br />
              online Netherlands{" "}
            </p>
          </li>
          <br />
          <li style={{ marginTop: "-20px" }}>
            BA English teachers education second degree{" "}
            <p style={{ marginLeft: "25px", marginTop: "-2px" }}>
              {" "}
              at Widesheim <br /> 01-09-2021 / 01-02-2022 <br />
              Zwolle Netherlands{" "}
            </p>
          </li>
          <br />
          <li style={{ marginTop: "-20px" }}>
            Java beginners course at
            <p style={{ marginLeft: "25px", marginTop: "-2px" }}>
              {" "}
              Ibat college <br />
              05-02-2018 / 01-08-2018 <br />
              Dublin Ireland{" "}
            </p>
          </li>
        </tr>
      </table>
    </Grid>
  );
}

function Work() {
  return (
    <Grid xs={2} style={{ paddingBottom: "120px" }}>
      <table style={{ textAlign: "Centre", }}>
        <tr>
          <h2> Work </h2>
        </tr>

        <br />
        <tr style={{ textAlign: "left" }}>
          <li>
            Techinical support analist at VMI Holland
            <p style={{ marginLeft: "25px", marginTop: "-2px" }}>
              Location: <br />
              Epe Netherlands
              <br /> From - Till:
              <br /> 02.2022 - 12.2022
              <br />
              tasks: Giving techinal support by phone, email, chat and face to
              face contact. train new hires and giving on site support
            </p>
          </li>
          <br />
          <li>
            Customer service technical agent at IBM
            <p style={{ marginLeft: "25px", marginTop: "-2px" }}>
              Location: <br /> Dublin, Ireland
              <br /> From - Till: <br />
              05.2018 - 06-2021
              <br />
              tasks: Giving techinal support by phone, email and chat. helping
              colleagues with dificulting issues and training new colleagues
              within the company
            </p>
          </li>
        </tr>
      </table>
    </Grid>
  );
}

export { Education, Work };
