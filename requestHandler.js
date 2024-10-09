import userSchema from './models/user.model.js';
// import productSchema from "./models/product.model.js";
import bcrypt from 'bcrypt';
import pkg from "jsonwebtoken";

const {sign}=pkg;

export async function signUp(req,res) {
  
    try{

        const {email,username,password,cpassword,place,address,phone,pincode} = req.body;
        if(!(email&& username&& password&& cpassword&& place&& address&& phone&& pincode))
            return res.status(404).send({msg:"Fields are empty"})
        if(password !== cpassword)
            return res.status(404).send({msg:"Password not matching"})
        bcrypt
        .hash(password,10)
        .then((hashedPassword)=>{
            userSchema
            .create({email,username,password:hashedPassword,place,address,phone,pincode})
            .then(()=>{
                console.log("Success");
                return res.status(201).send({msg:"Successs"})
            })
            .catch((error)=>{
                console.log("Faliure");
                return res.status(404).send({msg:"Not registered"})
            })
        })
    }
    catch(error){
        return res.status(404).send({msg:error})

    }  
   
}

//sign in 
export async function signIn(req,res){
    try {
        const {email,password}=req.body
    // console.log(email,password);

    if(!(email&&password))
        return res.status(404).send({msg:"Fields are empty"})
    const user= await userSchema.findOne({email})
    // console.log(user);
    if(!user){
        return res.status(404).send({msg:"Invalid email"})
    }
    const success = await bcrypt.compare(password,user.password)
    // console.log(success);
    if(!success)
        return res.status(404).send({msg:"Invalid password"})
    const token = await sign({userId:user._id},process.env.JWT_KEY,{expiresIn:"24h"})
    console.log(token);
    res.status(200).send({msg:"Successfully logged in",token})
    } catch (error) {
        console.log(error);  
    }
}


//get user data

export async function getUser(req,res) {
   try{
    console.log(req.params);
    const {_id}=req.params
    const data=await userSchema.findOne({_id})
    console.log(data);
    
    res.status(200).send(data)
   }
   catch(error){
    res.status(404).send(error)
   }  
}


