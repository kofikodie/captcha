import mongoose from 'mongoose'

const captchaSchema = new mongoose.Schema(
    {
        imageUrl: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true },
)

captchaSchema.index({ imageUrl: 1, answer: 1 }, { unique: true })

export default mongoose.model('Captcha', captchaSchema)
