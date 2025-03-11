import User from '../models/user.js';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = new User({ username, email, password });
  await user.save();

  const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
  res.status(201).json({ token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "your_jwt_secret", {
    expiresIn: "1h",
  });

  res.json({ token, isAdmin: user.isAdmin });
};




export { register, login };
