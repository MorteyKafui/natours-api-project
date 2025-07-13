import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getAUser,
  updateUser,
} from "../controllers/userController.mjs";

const userRouter = express.Router();

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getAUser).patch(updateUser).delete(deleteUser);

export default userRouter;
