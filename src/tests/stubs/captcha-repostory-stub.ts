import { CaptchaRepositoryInterface } from "../../repository/captcha-repostory"

export default class CaptchaRepositoryStub  implements CaptchaRepositoryInterface{
    async findMany() {
        return [
            {
                id: '1',
                imageUrl: 'https://via.placeholder.com/pizza',
                answer: 'pizza',
            },
            {
                id: '2',
                imageUrl: 'https://via.placeholder.com/lassagna',
                answer: 'lassagna',
            },
            {
                id: '3',
                imageUrl: 'https://via.placeholder.com/pasta',
                answer: 'pasta',
            },
        ]
    }

    async findOneById(id: string) {
        if (id === '1') {
            return {
                id: '1',
                imageUrl: 'https://via.placeholder.com/pizza',
                answer: 'pizza',
            }
        }
        return null
    }
}