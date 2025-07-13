import User from "../models/userModel.mjs";
import catchAsync from "../utils/catchAsync.mjs";

const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: "Operation successful",
    data: { user: newUser },
  });
});

export { signup };
