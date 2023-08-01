import instance from "../managers/api";

const useAddUser = () => {
  const addUser = async (userInfo) => {
    await instance.post('/users', userInfo)
  }

  return addUser
}

export default useAddUser;