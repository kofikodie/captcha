import { CaptchaRepositoryInterface } from '../repository/captcha-repostory'
import { QuestionGeneratorInterface } from './question-generator'
export class CaptchaGenerator {
    constructor(
        private readonly qGenerator: QuestionGeneratorInterface,
        private readonly cRepository: CaptchaRepositoryInterface,
    ) {}

    async generateCaptcha() {
        try {
            const captchas = await this.cRepository.findMany()
            const randomCaptchaQuestion =
                await this.qGenerator.generateQuestion()

            if (!captchas.length || !randomCaptchaQuestion) {
                return null
            }

            return {
                question: {
                    id: randomCaptchaQuestion.question.id,
                    challange: randomCaptchaQuestion.question.challange,
                },
                images: captchas.map(captcha => {
                    return {
                        id: captcha.id,
                        imageUrl: captcha.imageUrl,
                    }
                }),
            }
        } catch (err) {
            console.error(err)
            return null
        }
    }

    async validateCaptcha(questionId: string, answerId: string) {
        try {
            const captcha = await this.cRepository.findOneById(answerId)
            if (!captcha) {
                return false
            }

            const question = await this.qGenerator.findQuestionById(questionId)
            if (!question) {
                return false
            }

            if (captcha.id === question.answerId) {
                return true
            }

            return false
        } catch (err) {
            console.error(err)
            return false
        }
    }
}
