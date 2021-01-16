const Controller = require('../Controller');

class TvTablosController extends Controller {
    async index(ctx, next) {
        const service = this.getService('tvtablos')
        const text  = (await service.getTvtablosTickerText())[0]
        ctx.body = text || {}
    }

    async save_or_update(ctx, next) {
        const text = ctx.request.body.text
        const service = this.getService('tvtablos')
        const saved = await service.saveTvTablosTickerText(text)
        ctx.body = {
            success: !!saved,
            message: saved ? 'Успешно изменен' : 'Не удалось изменить текст',
            saved
        }
    }
}

module.exports = new TvTablosController();
