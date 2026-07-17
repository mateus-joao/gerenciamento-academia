import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    cpf: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: String,
      required: true
    },
    typeUser: {
      type: String,
      enum: ["aluno", "instrutor", "admin"],
      default: "aluno",
      required: true
    },
    password: {
      type: String,
      required: true
    },
    passwordResetToken: {
      type: String,
      default: null
    },

    passwordResetExpires: {
      type: Date,
      default: null
    }
    
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", UserSchema);

export default User;