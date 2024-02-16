import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if ((!username, !email, !password)) {
    res.status(400).json({ message: "All field are required!" });
  }
  //hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully!", newUser });
  } catch (error) {
    res.status(500).json({ message: "An error occurred!" });
  }
};
