import {Box, Table, TableCell, TableHead, TableRow, CircularProgress, TableBody} from "@mui/material";
import useGetUsers from "../hooks/useGetUsers";

const UserTable = () => {
  const users = useGetUsers()

  if (!users?.length) {
    return (
      <CircularProgress/>
    )
  }

  return (
    <Box
      sx={{
        marginTop: '20px',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px'
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nickname</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        {users?.length
          ? users.map((user) => (
            <TableBody key={user.email}>
              <TableRow>
                <TableCell>{user.nickname}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            </TableBody>
          ))
          : null}
      </Table>
    </Box>
  )
}
export default UserTable;