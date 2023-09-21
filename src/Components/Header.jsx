import { Avatar, Button, Divider, Input, Stack } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        sx={{
          position: "fixed",
          top: 0,
          bgcolor: "#D9D9D9",
          width: "99%",
          padding: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            sx={{
              height: "30px",
              bgcolor: "#219EBC",
              color: "white",
              borderRadius: "20px",
            }}
          >
            Create Task
          </Button>
          <hr />
          <Input
            sx={{
              bgcolor: "white",
              borderRadius: "5px",
              height: "30px",
              border: "none",
              outline: "none",
              marginLeft: "50px",
              padding:'5px'
            }}
          placeholder="Search your query"/>
        </Stack>
        <Avatar
          src="https://img.freepik.com/free-vector/handsome-man_1308-85984.jpg?w=740&t=st=1695284730~exp=1695285330~hmac=1ab6f975dec212b420fb3addb0efeff419b7b10da81e9c6cb0f1f70c3e4cc05a"
          sx={{
            marginRight: "20px",
          }}
        ></Avatar>
      </Stack>
    </div>
  );
};

export default Header;
