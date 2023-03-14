import React from "react";
import { useNavigate } from "react-router-dom";
//import HowToRegIcon from "@mui/icons-material/HowToReg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
function Reg() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <body>
           {" "}
      {/* <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}> */}   
       {" "}
      <div class="main">
               {" "}
        <div class="register">
                 {" "}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
                 {" "}
            <Box sx={{ width: "400px", mt: "50px" }}>
                     {" "}
              <form>
                          <h1>Register here</h1>         {" "}
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="First Name"
                  name="fname"
                  autoFocus
                />
                         {" "}
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="Last Name"
                  name="lname"
                />
                         {" "}
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="Age"
                  name="age"
                  type="number"
                />
                         {" "}
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="Email"
                  name="email"
                  type="email"
                />
                          <FormLabel component="legend">Gender</FormLabel>     
                   {" "}
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  sx={{ mb: "20px" }}
                >
                             {" "}
                  <Stack direction="row">
                                 {" "}
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                                 {" "}
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                               {" "}
                  </Stack>
                           {" "}
                </RadioGroup>
                         {" "}
                <FormLabel component="legend">Known language</FormLabel>       
                 {" "}
                <FormGroup>
                             {" "}
                  <FormControlLabel
                    control={<Checkbox />}
                    label="English"
                    name="language"
                    value="english"
                  />
                             {" "}
                  <FormControlLabel
                    control={<Checkbox />}
                    label="French"
                    name="language"
                    value="french"
                  />
                             {" "}
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Spanish"
                    name="language"
                    value="spanish"
                  />
                                      {" "}
                </FormGroup>
                          <Link to="/education">Enter Education Detail</Link>   
                     {" "}
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: "20px" }}
                  onClick={() => handleClick()}
                >
                              Register         {" "}
                </Button>
                       {" "}
              </form>
                   {" "}
            </Box>
               {" "}
          </Box>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </body>
  );
}
export default Reg;
