import { RequestHandler } from "express";


export const getAllContact:RequestHandler = (req,res)=>{
   res.json({"message":"salami"})
}           