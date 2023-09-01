import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name for category is needed']
    },
    quantity: {
        type: Number,
        default: 0.00
    }
},{
    timestamps: true
})
    
export default mongoose.model('Category', userSchema)
