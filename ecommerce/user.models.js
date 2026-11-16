import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

  username:{
    type:String,
    required: true,
    unique: true,
    loweCase: true,
  },
  email:{
    type:String,
    required: true,
    unique: true,
    loweCase: true,
  },
  password:{
    type:String,
    required: true,
  },


},{timestamps: true})

export const User = mongoose.model("User", userSchema)