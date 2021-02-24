const fs = require('fs');
const BaseService = require('./BaseService');
const helperService = require('./HelperService');

class AdsService extends BaseService {
    async saveNewAds({ fileName, filePath, fileType, duration = null }) {
        let dur = null
        const newAds = await this._db.insert({
            type: fileType,
            name: fileName,
            file_path: filePath
        }).into('ads');

        if(helperService.isImage(fileName)) {
            dur = duration || 2
        } else {
            dur = null
        }

        if(newAds && Array.isArray(newAds) && newAds[0]) {
            const newAdsSchedules = await this._db.insert({
                ads_id: newAds[0],
                duration: dur
            }).into('ads_schedules')
        }
        return newAds
    }

    async getAds() {
        return this._db
            .select(
                'ads.id',
                'ads.name',
                'ads.type',
                'ads_schedules.duration',
                'ads_schedules.id AS ads_schedules_id'
            )
            .from('ads')
            .leftJoin('ads_schedules', 'ads.id', 'ads_schedules.ads_id')
    }

    async getAdsByIdWithFilePath(id = null) {
        return this._db
            .select(
                'id',
                'name',
                'type',
                'file_path'
            )
            .from('ads')
            .where('id', '=', id)
    }

    async deleteById(id) {
        const ads = (await this.getAdsByIdWithFilePath(id))
        const file_path = ads && ads[0].file_path || null
        if(fs.existsSync(file_path)) {
            try {
                fs.unlinkSync(file_path);
            } catch(err) {}
            const deleted1 = await this._db('ads')
                .where('id', id)
                .del()
            const deleted2 = await this._db('ads_schedules')
                .where('ads_id', id)
                .del()
            return [deleted1, deleted2]

        } else {
            const deleted1 = await this._db('ads')
                .where('id', id)
                .del()
            const deleted2 = await this._db('ads_schedules')
                .where('ads_id', id)
                .del()
            return [deleted1, deleted2]
        }
    }
}

module.exports = new AdsService();
