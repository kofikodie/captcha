import QuestionGenerator from "../../service/question-generator"
import QuestionRepositoryStub from "../stubs/question-repository-stub"

describe('Question Generator Service', () => {
    it('should generate a valid question', async () => {
        const questionRepository = new QuestionRepositoryStub()
        const questionGenerator = new QuestionGenerator(questionRepository)

        const question = await questionGenerator.generateQuestion()
        expect(question).not.toBeNull()
        expect(question?.question).not.toBeNull()
        expect(question?.question.challange).not.toBeNull()
        expect(question?.question.id).not.toBeNull()
    })

    it('should find a question by id', async () => {
        const questionRepository = new QuestionRepositoryStub()
        const questionGenerator = new QuestionGenerator(questionRepository)

        const question = await questionGenerator.findQuestionById('1')
        expect(question).not.toBeNull()
        expect(question?.question).not.toBeNull()
        expect(question?.question.challange).not.toBeNull()
        expect(question?.question.id).not.toBeNull()
    })

    it('should not find a question by id', async () => {
        const questionRepository = new QuestionRepositoryStub()
        const questionGenerator = new QuestionGenerator(questionRepository)

        const question = await questionGenerator.findQuestionById('2')
        expect(question).toBeNull()
    })
})