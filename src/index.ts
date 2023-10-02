import app from './app'
import * as dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

;(async () => {
    try {
        mongoose.connect(process.env.MONGO_URI || '')

        await app.listen({
            port: Number(process.env.APP_PORT) || 8888,
            host: process.env.APP_HOST || '0.0.0.0',
        })

        app.log.info(`Server listening on ${app.server.address()}`)
    } catch (err) {
        app.log.error('Error starting server')
        app.log.error(err)
    }
})()
