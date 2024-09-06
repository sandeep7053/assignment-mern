import mongoose from "mongoose";

const ConnectionDatabase = async (req, res) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/user-Admin")
    console.log(`connection database successfully connected `)


  } catch (error) {
    console.log(error)

  }
}

export default ConnectionDatabase;