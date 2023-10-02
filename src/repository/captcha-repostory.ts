import CaptchaModel from '../model/captcha-model'

export class CaptchaRepository implements CaptchaRepositoryInterface {
    async findMany() {
        try {
            const captchas = await CaptchaModel.find({})

            return captchas.map(captcha => {
                return {
                    id: captcha.id,
                    imageUrl: captcha.imageUrl,
                    answer: captcha.answer,
                }
            })
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async findOneById(id: string) {
        try {
            const captcha = await CaptchaModel.findById(id)
            if (!captcha) {
                return null
            }

            return {
                id: captcha.id,
                imageUrl: captcha.imageUrl,
                answer: captcha.answer,
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

export interface CaptchaRepositoryInterface {
    findMany(): Promise<Captcha[]>
    findOneById(id: string): Promise<Captcha | null>
}

export interface Captcha {
    id: string
    imageUrl: string
    answer: string
}
