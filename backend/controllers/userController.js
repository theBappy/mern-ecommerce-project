import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}


// route controller for user login
const loginUser = async(req,res) => {
  try{
    const {email, password} = req.body;

    const user = await userModel.findOne({email})

    if(!user){
        return res.json({success: false, message: 'User does not exists'}) 
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if(isMatch){
        const token = createToken(user._id)
        res.json({success:true, token})
    }
    else {
        res.json({success:false, message: 'Invalid credentials'})
    }

  }catch(error){
    console.log(error)
    res.json({success:false, message:error.message})
  } 
}

// route controller for user registration
const registerUser = async(req,res) => {
    try{
        const {name, email, password} = req.body;
        
        // checking user already exist or not
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.json({success: false, message: 'User already exists'})
        }
        // checking validation of email and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false, message: 'Please enter a valid email'})
        }
        if(password.length < 8){
            return res.json({success:false, message: 'Please enter a strong password containing more than 8 characters'})
        }

        // hashing user password using bcrypt by generating a salt

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email, 
            password: hashedPassword,
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success:true,token})
   
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// route controller for admin log in only
const adminLogin = async(req,res) => {
    try{
        const {email, password} = req.body;
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true, token})
        }else{
            res.json({success:false, message:'Invalid credentials'})
        }
    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {loginUser, registerUser, adminLogin};