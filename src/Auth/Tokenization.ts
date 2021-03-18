import jwt from "jsonwebtoken";
import { SECRET_PASS } from "../Config";
import { IUser } from "../Models/user";

function createToken(user:IUser) {
    return jwt.sign({id:user._id},`${SECRET_PASS}`,{
        expiresIn:84600
    })
    
}

export default createToken;