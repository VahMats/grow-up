import {Router} from "express";
import {usersData} from "../constants/usersData";

const router = Router()

router.get('/', (req, res) => {
  res.send(usersData)
})

router.post('/', (req, res) => {
  const newUser = req.body
  const userList = usersData
  userList.push(newUser)
  res.send(userList)
})

export default router