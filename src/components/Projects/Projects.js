import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function Projects() {
  const [showtextTindog, SetshowtextTindog] = useState("true");
  const [showtextDoulbeGame, SetshowtextDoulbeGame] = useState("true");
  const [showtextSimonGame, SetshowtextSimonGame] = useState("true");
  const [showtextKeeper, SetshowtextKeeper] = useState("true");
  const [showtextEmailSignup, SetshowtextEmailSignup] = useState("true");

  return (
    <Container>
      <h1>HTML + CSS </h1>
      <Grid container spacing={2}>
        <Grid item xs>
          <Card
            className="ProjectTile ProjectTileTindog"
            onMouseEnter={(event) => SetshowtextTindog(false)}
            onMouseLeave={(event) => SetshowtextTindog(true)}
            onClick={(event) =>
              (window.location.href = "https://dannymuijs.github.io/Tindog/")
            }
          >
            <CardContent>
              <Card>
                <Typography
                  hidden={showtextTindog}
                  variant="h4"
                  component="div"
                >
                  Tindog
                </Typography>
                <Typography
                  hidden={showtextTindog}
                  variant="h5"
                  component="div"
                >
                  a static dating site for dogs. Build with html and css
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card
            className="ProjectTile ProjectTileDoulbeGame"
            onMouseEnter={(event) => SetshowtextDoulbeGame(false)}
            onMouseLeave={(event) => SetshowtextDoulbeGame(true)}
            onClick={(event) =>
              (window.location.href = "https://dannymuijs.github.io/DiceGame/")
            }
          >
            <CardContent>
              <Card>
                <Typography
                  hidden={showtextDoulbeGame}
                  variant="h4"
                  component="div"
                >
                  Dice Game
                </Typography>
                <Typography
                  hidden={showtextDoulbeGame}
                  variant="h5"
                  component="div"
                >
                  A game that gives you a random number everytime you refresh
                  the page build with JS
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <h1>JS + react </h1>
      <Grid container spacing={2}>
        <Grid item xs>
          <Card
            className="ProjectTile ProjectTileSimonGame"
            onMouseEnter={(event) => SetshowtextSimonGame(false)}
            onMouseLeave={(event) => SetshowtextSimonGame(true)}
            onClick={(event) =>
              (window.location.href = "https://dannymuijs.github.io/SimonGame/")
            }
          >
            {" "}
            <CardContent>
              <Card>
                <Typography
                  hidden={showtextSimonGame}
                  variant="h4"
                  component="div"
                >
                  Simon says Game
                </Typography>
                <Typography
                  hidden={showtextSimonGame}
                  variant="h5"
                  component="div"
                >
                  A game that tests your short memory. play agains the computer
                  build with JS
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          <Card
            className="ProjectTile ProjectTileKeeper"
            onMouseEnter={(event) => SetshowtextKeeper(false)}
            onMouseLeave={(event) => SetshowtextKeeper(true)}
            onClick={(event) =>
              (window.location.href = "https://mp16jv.csb.app/")
            }
          >
            {" "}
            <CardContent>
              <Card>
                <Typography
                  hidden={showtextKeeper}
                  variant="h4"
                  component="div"
                >
                  Keeper note app
                </Typography>
                <Typography
                  hidden={showtextKeeper}
                  variant="h5"
                  component="div"
                >
                  A website where you can keep your notes build with React
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid style={{ marginTop: "5%" }}>
        <Grid item xs>
          <Card
            className="ProjectTile ProjectTileEmailSignup"
            onMouseEnter={(event) => SetshowtextEmailSignup(false)}
            onMouseLeave={(event) => SetshowtextEmailSignup(true)}
            onClick={(event) =>
              (window.location.href =
                "https://secure-mesa-33827.herokuapp.com/")
            }
          >
            {" "}
            <CardContent>
              <Card>
                <Typography
                  hidden={showtextEmailSignup}
                  variant="h4"
                  component="div"
                >
                  Email signup form
                </Typography>
                <Typography
                  hidden={showtextEmailSignup}
                  variant="h5"
                  component="div"
                >
                  A form where you can sign up for a newsletter backend build
                  with mailchimp
                </Typography>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs>
          {/* <Card
            className="ProjectTile ProjectTileKeeper"
            onClick={(event) =>
              (window.location.href = "https://mp16jv.csb.app/")
            }
          ></Card> */}
        </Grid>
      </Grid>
      <Grid item xs>
        <h1 style={{ marginTop: "30%" }}> </h1>
      </Grid>
    </Container>
  );
}
