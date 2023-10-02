import { CaptchaGenerator } from '../../service/captcha-generator'
import QuestionGenerator from '../../service/question-generator'
import  CaptchaRepositoryStub  from '../stubs/captcha-repostory-stub'
import QuestionRepositoryStub from '../stubs/question-repository-stub'
describe('Captcha Generator Service', () => {
    it('should generate a valid captcha', async () => {
        const questionGenerator = new QuestionGenerator(new QuestionRepositoryStub)
        const captchaRepository = new CaptchaRepositoryStub()
        const captchaGenerator = new CaptchaGenerator(
            questionGenerator,
            captchaRepository,
        )

        const captcha = await captchaGenerator.generateCaptcha()
        expect(captcha).not.toBeNull()
        expect(captcha?.question).not.toBeNull()
        expect(captcha?.images).not.toBeNull()
        expect(captcha?.images?.length).toBeGreaterThan(0)
    }, 100000)
    it('should validate a captcha given the correct answer', async () => {
        const questionGenerator = new QuestionGenerator(new QuestionRepositoryStub)
        const captchaRepository = new CaptchaRepositoryStub()
        const captchaGenerator = new CaptchaGenerator(
            questionGenerator,
            captchaRepository,
        )

        const captcha = await captchaGenerator.generateCaptcha()
        console.log(captcha)
        expect(captcha).not.toBeNull()
        expect(captcha?.question).not.toBeNull()
        expect(captcha?.images).not.toBeNull()
        expect(captcha?.images?.length).toBeGreaterThan(0)

        const isValid = await captchaGenerator.validateCaptcha(
            captcha?.question?.id ?? '',
            captcha?.images?.[0].id ?? '',
        )
        expect(isValid).toBe(true)
    })

    it('should not validate a captcha given wrong answer', async () => {
        const questionGenerator = new QuestionGenerator(new QuestionRepositoryStub)
        const captchaRepository = new CaptchaRepositoryStub()
        const captchaGenerator = new CaptchaGenerator(
            questionGenerator,
            captchaRepository,
        )

        const captcha = await captchaGenerator.generateCaptcha()
        expect(captcha).not.toBeNull()
        expect(captcha?.question).not.toBeNull()
        expect(captcha?.images).not.toBeNull()
        expect(captcha?.images?.length).toBeGreaterThan(0)

        const isValid = await captchaGenerator.validateCaptcha(
            captcha?.question?.id ?? '',
            '123',
        )
        expect(isValid).toBe(false)
    })  
})
