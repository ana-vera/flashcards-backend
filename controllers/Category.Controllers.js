import asyncHandler from "express-async-handler"

const getCategories = 
asyncHandler(
    async (req,res) =>{
        res.status(200).json({message: 'Obtain categories'})
})

const createCategory = 
asyncHandler(
    async (req,res) =>{
        res.status(200).json({message: 'Category created'})
})

const updateCategory = 
asyncHandler(
    async (req,res) =>{
        res.status(200).json({message: `Category updated. USER ID: ${req.params.id}`})
})

const deleteCategory = 
asyncHandler(
    async (req,res) =>{
        res.status(200).json({message: `Category deleted. USER ID: ${req.params.id}`})
})

export {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
}
