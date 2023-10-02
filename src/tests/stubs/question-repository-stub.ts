import { QuestionRepositoryInterface } from '../../repository/question-repostory'

export default class QuestionRepositoryStub
    implements QuestionRepositoryInterface
{
    async findMany() {
        return [
            {
                id: '1',
                question: 'Select all images with pizza',
                answer: '1',
            },
        ]
    }

    async findOneById(id: string) {
        if (id !== '1') {
            return null
        }

        return {
            id: '1',
            question: 'Select all images with pizza',
            answer: '1',
        }
    }
}
