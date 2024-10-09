import jwt from "jsonwebtoken";
const {verify}=jwt
import userSchema from "../models/user.model.js"


export default async function Auth(req,res,next) {
    console.log("middleware");
    console.log(req.headers);
    const key = req.headers.authorization
    console.log(key);
    if(!key)
        return res.status(403).send({msg:"Unauthorized access"})
    const token = key.split(" ")[1]
    console.log(token);
    const auth = await verify(token,process.env.JWT_KEY)
    console.log(auth);
    const user= await userSchema.findOne({_id:auth.userId})
    console.log(user);
    req.userId=auth.userId
    next()
   
    
}