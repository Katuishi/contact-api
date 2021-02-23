import { model, Document, Schema, DocumentQuery } from "mongoose";
import bcrypt from "bcrypt";
import { v4 } from "uuid";

export interface IUser extends Document {
  username?: String;
  email?: String;
  password?: String;
  isValidPassword: (password: String) => Promise<Boolean>;
}

const userSchema = new Schema({
  _id: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

userSchema.pre<IUser>("save", async function (next) {
  const passwordHashed = await bcrypt.hash(this.password, 10);
  this._id = v4();
  this.password = passwordHashed;
  next();
});

userSchema.methods.isValidPassword = async function (
  password: String
): Promise<Boolean> {
  let compare = await bcrypt.compare(password, this.password);
  console.log(compare)
  return compare;
};

export default model<IUser>("user", userSchema);
