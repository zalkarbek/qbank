const path = require('path');
const fs = require('fs');
const Controller = require('../Controller');

class AdsApiController extends Controller {
    async ads_uploads(ctx, next) {
        const adsService = this.getService('ads')
        const helperService = this.getService('helper')

        const file = ctx.request.files.file
        const duration = Number(ctx.request.body.duration)
        const timestamp = (new Date()).getTime()

        const filePath = path.join(ctx.app.uploadPath, `${timestamp}_${file.name}`)
        const fileName = `${timestamp}_${file.name}`
        const fileType = helperService.getFileType(fileName)

        const inserted = await adsService.saveNewAds({ fileName, filePath, fileType, duration })
        let saved = false

        fs.rename(file.path, filePath, (e) => {
            if(e === null) {
                saved = true
            }
        });

        ctx.body = {
            error: false,
            message: 'Успешно сохранено',
            fileSaved: saved,
            inserted
        }
    }

    async index(ctx, next) {
        const adsService = this.getService('ads')
        ctx.body = await adsService.getAds()
    }

    async delete(ctx, next) {
        const id = ctx.params.id
        const adsService = this.getService('ads')
        const deleted = await adsService.deleteById(id)
        ctx.body = {
            success: !!deleted[0],
            message: deleted[0] ? 'Успешно удален' : 'Ошибка удаления файл может воспроизводится',
            deleted
        }
    }
}

module.exports = new AdsApiController();
