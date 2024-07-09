import mongoose from "mongoose";

!(async function () {
  try {
    await mongoose.connect("mongodb://localhost/n126");
    console.log("db connection...");
    return true;
  } catch (error: any) {
    console.log(error.message);
    return true;
  }
})();
