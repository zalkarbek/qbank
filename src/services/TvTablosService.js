const fs = require('fs');
const BaseService = require('./BaseService');
const helperService = require('./HelperService');

class TvTablosService extends BaseService {
    async saveTvTablosTickerText(text) {
        const tickerText = (await this.getTvtablosTickerText())[0] || {}
        if(tickerText && tickerText.id) {
            return this._db('tvtablos_ticker')
                .where('id', '=', tickerText.id)
                .update({
                    tvtablo_text: text
                });
        } else {
            return this._db.insert({
                tvtablo_text: text,
            }).into('tvtablos_ticker');
        }
    }

    async getTvtablosTickerText() {
        return this._db
            .select(
                'id',
                'tvtablo_text',
            )
            .from('tvtablos_ticker')
    }
}

module.exports = new TvTablosService();
