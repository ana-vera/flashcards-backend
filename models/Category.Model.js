import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name for category is needed']
    },
    quantity: {
        type: Number,
        default: 0.00
    },
    budget_type: {
        type: String,
        required: [true, 'Value needed: "fixed" or "percentage"']
    },
    budget: {
        type: Number,
        required: [true, 'Please define the budget. Either a fixed number, or a percentage (depending on budget type)']
    }

},{
    timestamps: true
})

export default mongoose.model('Category', userSchema)
