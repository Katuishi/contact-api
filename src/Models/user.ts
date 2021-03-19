import { model,Model, Document, Schema } from "mongoose";
import { v4 } from "uuid";
import encryptoKey, { comparePassword } from "../Helpers/indes";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  comparePassword:(password:string,hash:string) => Promise<Boolean>;
  
}

interface IUserDocument extends Model<IUser>{

  comparePassword:(password:string,hash:string) => Promise<Boolean>;
}

const userSchema = new Schema({
  _id: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
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
    trim: true,
    lowercase: true
  },
});

userSchema.pre<IUser>("save", async function (next) {

  let hash: string = await encryptoKey(this.password);
  this._id = v4();
  this.password = hash;

  next();
});
userSchema.statics.comparePassword = comparePassword

const User = model<IUser,IUserDocument>("user", userSchema);

export default User 