import * as fastify from 'fastify'
import { CaptchaGenerator } from './service/captcha-generator'
import QuestionGenerator from './service/question-generator'
import { QuestionRepository } from './repository/question-repostory'
import { CaptchaRepository } from './repository/captcha-repostory'

const server = fastify.default({ logger: true })

server.get('/captcha', async (request, reply) => {
    const captcha = new CaptchaGenerator(
        new QuestionGenerator(new QuestionRepository()),
        new CaptchaRepository(),
    )
    const result = await captcha.generateCaptcha()
    if (!result) {
        return reply.status(400).send({
            message: 'Something went wrong. Please try again later.',
        })
    }

    return reply.status(200).send(result)
})

interface QueryParams {
    questionId: string
    answerId: string
}

server.get('/validate', async (request, reply) => {
    const { questionId, answerId } = request.query as QueryParams
    console.log(request.query)
    if (!questionId || !answerId) {
        return reply.status(400).send({
            message: 'Bad Request',
        })
    }

    const captcha = new CaptchaGenerator(
        new QuestionGenerator(new QuestionRepository()),
        new CaptchaRepository(),
    )
    const result = await captcha.validateCaptcha(questionId, answerId)
    if (!result) {
        if (false === result) {
            return reply.status(400).send({
                message: 'Wrong answer. Please try again.',
            })
        }

        return reply.status(400).send({
            message: 'Something went wrong. Please try again later.',
        })
    }

    return reply.status(200).send({
        message: 'Success',
    })
})

export default server
