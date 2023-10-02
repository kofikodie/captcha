import mongoose, { Schema } from 'mongoose'

const questionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        answer: {   
            type: Schema.Types.ObjectId,
            $ref: 'Captcha',
            required: true,
        },
    },
    { timestamps: true },
)

questionSchema.index({ question: 1, answer: 1 }, { unique: true })

export default mongoose.model('Question', questionSchema)
