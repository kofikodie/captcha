import QuestionRepository from '../model/question-model'
import { QuestionRepositoryInterface } from '../repository/question-repostory'

export default class QuestionGenerator implements QuestionGeneratorInterface {
    constructor(private readonly qrepository: QuestionRepositoryInterface) {}

    async generateQuestion() {
        const question = await this.qrepository.findMany()
        if (!question.length) {
            return null
        }

        const randomQuestion =
            question[Math.floor(Math.random() * question.length)]

        return {
            question: {
                id: randomQuestion.id,
                challange: randomQuestion.question,
            },
        }
    }

    async findQuestionById(id: string) {
        try {
            const question = await this.qrepository.findOneById(id)
            if (!question) {
                return null
            }

            return {
                question: {
                    id: question.id,
                    challange: question.question,
                },
                answerId: question.answer.toString(),
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

export interface QuestionGeneratorInterface {
    generateQuestion(): Promise<QuestionResponse | null>
    findQuestionById(
        id: string,
    ): Promise<(QuestionResponse & { answerId: string }) | null>
}

export interface QuestionResponse {
    question: {
        id: string
        challange: string
    }
}
