import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@material-ui/core/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SendIcon from "@mui/icons-material/Send";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { send } from "@emailjs/browser";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
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

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid className="background" style={{ paddingRight: "6%" }} item>
          <h1 style={{ color: "#0DAD8D" }}>Send me a message </h1>
          <div>
            <TextField
              required
              id="standard-required"
              margin="normal"
              label="Name"
              name="Name"
              placeholder="Jon Doe"
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
              placeholder="example@example.com"
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
              placeholder="subject"
              onChange={handleChange}
            />
          </div>
          <br />
          <TextField
            style={{ padding: "0%" }}
            id="standard-multiline-required"
            margin="normal"
            label="Message"
            name="Message"
            multiline
            rows={5}
            placeholder="Message"
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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
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

        <Grid className="background">
          <h1 style={{ color: "#0DAD8D" }}> Contact information</h1>
          <p style={{ marginTop: "30%" }}>
            <span>
              <LocalPhoneIcon style={{ color: "#0DAD8D" }} /> Phone:
            </span>
            <a href="tel://+31628873756"> +31 6 28 87 37 56 </a>
          </p>
          <p style={{ marginTop: "20%" }}>
            <span>
              {" "}
              <MailOutlineIcon style={{ color: "#0DAD8D" }} /> Email:{" "}
            </span>
            <a href="mailto:danny.muijs@outlook.com">danny.muijs@outlook.com</a>
          </p>
        </Grid>
      </Grid>
    </Container>
  );
}
