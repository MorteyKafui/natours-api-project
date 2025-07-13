import app from "./app.mjs";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE_URI, {}).then(() => {
  console.log("Connected to DB...");
});

app.listen(PORT, () => {
  console.log("App running on port " + PORT);
});
