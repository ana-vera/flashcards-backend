import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please type in your name']
    },
    email: {
        type: String,
        required: [true, 'Please type in your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please type in your password']
    }

},{
    timestamps: true
})

export default mongoose.model('Usuario', userSchema)
