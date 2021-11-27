
import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";


const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  let textInput = useRef(null);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://fierce-gorge-17477.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        'authorization': `Bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          textInput.current.value = ""
          setSuccess(true);
         
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      {
          success && <Alert severity="success">
          <AlertTitle>New Admin Added Successfully...</AlertTitle>
        </Alert>
        }
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "30%" }}
          label="Email"
          inputRef={textInput}
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <br />
        <Button style={{ margin: 10 }} type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
     
    </div>
  );
};

export default MakeAdmin;
