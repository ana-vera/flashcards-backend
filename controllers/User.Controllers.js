import asyncHandler from "express-async-handler"

const getUsers = 
asyncHandler(
    async (req,res) =>{
        res.status(200).json({message: 'Obtain users'})
})

const createUser = 
asyncHandler(
    async (req,res) =>{
        res.status(200).json({message: 'User created'})
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
    deleteUser
}
