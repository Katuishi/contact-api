import { Schema, model } from "mongoose";

const schema = new Schema({
    name:{
        type:String
    },
    surname:{
        type:String
    },
    telephone1:{
        type:String,
        unique:true
    },
    telephone2:{
        type:String,
        unique:true
        },
    email:{
        type:String
    },
    type:{
        required:true,
        enum:["movil","telephone","business"]
    }
})

schema.pre("save",(next)=>{
    schema
})

export default model("contact",schema)