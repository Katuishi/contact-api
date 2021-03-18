import { Schema, model , Document} from "mongoose";

interface IContact extends Document{
  name?:String;
  surname?:String;
  telephone?:String;
  category?:String;
}

const contactSchema = new Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  telephone: {
    type: String,
    unique: true,
    trim:true
  },
  idUser:{
    required:true,
    type:String
  },
  category: {
    required: true,
    type:String,
    enum: ["movil", "telephone", "business"],
  },
});



export default model<IContact>("contact", contactSchema);
