import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@material-ui/core/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { send } from "emailjs-com";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function FormContact(props) {
  const [value, setValue] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_rvb87we", "template_c9d75fd", value, "_IsaBclFMmBcfUoXS")
      .then((response) => {
        setOpen(true);

        console.log("SUCCESS!", response.status, response.text);
      })

      .catch((err) => {
        console.log("FAILED...", err);
      });
    e.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
  };

  //error handeling
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#0DAD8D"
  }));

  return (
    <Container>
      <Grid container spacing={1}>
        <Item lg={1} style={{ padding: "0 10%" }}>
          <Grid item>
            <h1>Send me a message </h1>
            <div>
              <TextField
                required
                id="standard-required"
                margin="normal"
                label="Name"
                name="Name"
                defaultValue="Jon Doe"
                onChange={handleChange}
              />
            </div>

            <div>
              <TextField
                required
                id="standard-required"
                margin="normal"
                type="email"
                label="Email"
                name="Email"
                defaultValue="example@example.com"
                onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <TextField
                required
                id="standard-required"
                label="Subject"
                name="Subject"
                defaultValue="subject"
                onChange={handleChange}
              />
            </div>
            <br />
            <TextField
              id="standard-multiline-required"
              margin="normal"
              label="Message"
              name="Message"
              multiline
              rows={5}
              defaultValue="Message"
              onChange={handleChange}
            />
            <br />

            <Button
              variant="contained"
              onClick={onSubmit}
              endIcon={<SendIcon />}
              type="submit"
            >
              Send
            </Button>

            <Stack spacing={2} lg={{ width: "100%" }}>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  The message has been send!
                </Alert>
              </Snackbar>
            </Stack>
          </Grid>
        </Item>

        <Item style={{ padding: "5%", marginLeft: "8%" }}>
          <Grid>
            <h1> Contact information</h1>
            <p style={{ marginTop: "30%" }}>
              <span>
                <LocalPhoneIcon /> Phone:
              </span>
              <a href="tel://+31628873756"> +31 6 28 87 37 56 </a>
            </p>
            <p style={{ marginTop: "20%" }}>
              <span>
                {" "}
                <MailOutlineIcon /> Email:{" "}
              </span>
              <a href="mailto:danny.muijs@outlook.com">
                danny.muijs@outlook.com
              </a>
            </p>
          </Grid>
        </Item>
      </Grid>
    </Container>
  );
}
