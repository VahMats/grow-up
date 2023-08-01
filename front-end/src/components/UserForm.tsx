import {Box, Button, TextField} from '@mui/material';

import {IUser} from './UserForm';
import {useState} from "react";
import useAddUser from "../hooks/useAddUser";

export interface IUser {
  nickname: string;
  email: string;
  password: string;
}

const UserForm = () => {
  const [user, setUser] = useState<IUser>({nickname: '', email: '', password: ''});
  const addUser = useAddUser()
  const clearState = () => {
    setUser({nickname: '', email: '', password: ''});
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (user.email && user.nickname && user.password) {
      addUser(user)
      clearState();
    }
  };

  return (
    <form onSubmit={onSubmit} style={{width: '30%'}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '5px'
        }}
      >
        <TextField
          label="Nickname"
          value={user.nickname}
          onChange={(e) => {
            setUser({...user, nickname: e.target.value});
          }}
        />
        <TextField
          label="Email"
          value={user.email}
          type="email"
          onChange={(e) => {
            setUser({...user, email: e.target.value});
          }}
        />
        <TextField
          label="Password"
          value={user.password}
          type="password"
          onChange={(e) => {
            setUser({...user, password: e.target.value});
          }}
        />
        <Button type="submit" variant="contained" sx={{width: '40%', margin: 'auto'}}>
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default UserForm;