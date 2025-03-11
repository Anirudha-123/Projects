// import express from 'express';
// import User from '../models/User.js';

// const router = express.Router();

// router.post('/save', async (req, res) => {
//   const { email, ...data } = req.body;
//   let user = await User.findOne({ email });
//   if (user) {
//     await User.updateOne({ email }, data);
//     return res.json({ message: 'User updated' });
//   }
//   user = new User(req.body);
//   await user.save();
//   res.json({ message: 'User saved' });
// });

// export default router;

// routes/userRoutes.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/save', async (req, res) => {
  const { email, ...data } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    await User.updateOne({ email }, data);
    return res.json({ message: 'User updated' });
  }
  user = new User(req.body);
  await user.save();
  res.json({ message: 'User saved' });
});

export default router;