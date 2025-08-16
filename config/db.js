import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ghanshyamchoudhary9009:I5Jsqwkg3viDwo6z@cluster01.bvllcq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};
