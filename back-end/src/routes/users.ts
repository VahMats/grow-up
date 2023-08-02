import {Router} from 'express';

const router = Router();

export const usersData = [
  {
    nickname: 'First user',
    email: 'firstUser@email.com',
    password: 'password'
  }, {
    nickname: 'Second user',
    email: 'secondUser@email.com',
    password: 'password'
  }, {
    nickname: 'Third user',
    email: 'thirdUser@email.com',
    password: 'password'
  }, {
    nickname: 'Fourth user',
    email: 'fourthUser@email.com',
    password: 'password'
  },
];

router.get('/', (req, res) => {
  res.send(usersData);
});

router.post('/', (req, res) => {
  const newUser = req.body;
  const userList = usersData;
  userList.push(newUser);
});

export default router;
