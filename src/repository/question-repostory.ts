import QuestionModel from '../model/question-model'

export class QuestionRepository implements QuestionRepositoryInterface {
    async findMany() {
        try {
            const questions = await QuestionModel.find({})

            return questions.map(question => {
                return {
                    id: question.id,
                    question: question.question,
                    answer: question.answer.toString(),
                }
            })
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async findOneById(id: string) {
        try {
            const question = await QuestionModel.findById(id)
            if (!question) {
                return null
            }

            return {
                id: question.id,
                question: question.question,
                answer: question.answer.toString(),
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

export interface QuestionRepositoryInterface {
    findMany(): Promise<Question[]>
    findOneById(id: string): Promise<Question | null>
}

export interface Question {
    id: string
    question: string
    answer: string
}
