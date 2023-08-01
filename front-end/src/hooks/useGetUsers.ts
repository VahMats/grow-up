import {useEffect, useState} from "react";
import instance from "../managers/api";
import {IUser} from "../components/UserForm";

function useGetUsers() {
  const [users, setUsers] = useState<IUser[]>([])
  const foo = async () => {
    const response = await instance.get('/users')
    setUsers(response.data)
  }

  useEffect(() => {
    foo()
  }, []);

  return users

}

export default useGetUsers