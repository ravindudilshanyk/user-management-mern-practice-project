const User = require("../Model/UserModel");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({
        message: "No users found",
      });
    }

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
  try {
    const { name, gmail, age, address } = req.body;

    // Log incoming request data
    console.log("Incoming User Data:", req.body);

    const user = await User.create({ name, gmail, age, address });

    console.log("User Created Successfully:", user);

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error.message);
    next(error);
  }
};

//get by id
const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

//update user details 
const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const { name, gmail, age, address } = req.body;

    const user = await User.findByIdAndUpdate(userId, { name, gmail, age, address }, { new: true });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    next(error);
  }
};

//delete user
const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({ message: "User deleted successfully", user });
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
