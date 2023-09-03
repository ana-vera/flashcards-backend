import asyncHandler from "express-async-handler"
import User from '../models/User.Model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const getUsers = asyncHandler(
    async (req,res) =>{
        res.status(200).json({message: 'Obtain users'})
})

const createUser = asyncHandler(
    async (req,res) =>{
        console.log(req.body)
        const {name, email, password} = req.body    
    
        if (!name || !email || !password) {
            res.status(400)
            throw new Error('Missing data')
        }
    
        const userExists = await User.findOne({email})
        if (userExists) {
            res.status(400)
            throw new Error('Email already registered')
        }
    
        const salt  = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
    
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
    
        if(user){
            res.status(201).json({
                message: "User created",
                _id: user.id,
                name: user.name,
                email: user.email,
                token: user.token
            })
        } else{
            res.status(400)
            throw new Error('Invalid data')
        }
})

const loginUser = asyncHandler( async (req,res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    console.log(`email  ${email}`.bgCyan)
    console.log(`password  ${password}`.bgMagenta)

    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id)
        })
    } else {
        res.status(400)
        throw new Error("Incorrect username or password")
    }
})

const updateUser = 
asyncHandler(
    async (req,res) =>{
        res.status(200).json({message: `User updated. USER ID: ${req.params.id}`})
})

const deleteUser = 
asyncHandler(
    async (req,res) =>{
        res.status(200).json({message: `User deleted. USER ID: ${req.params.id}`})
})

export {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    loginUser
}
