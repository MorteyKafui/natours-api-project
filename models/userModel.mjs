import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is needs to be provided"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Type a strong password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Type a strong password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
});

const User = mongoose.model("User", userSchema);

export default User;
