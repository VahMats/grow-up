import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import {Box} from "@mui/material";

const App = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <UserForm/>
      <UserTable/>
    </Box>
  );
};

export default App;
