const BaseService = require('./BaseService');

class HelperService extends BaseService {
    getFileExtension(path) {
       const ext = /^.+\.([^.]+)$/.exec(path);
       return ext == null ? "" : ext[1];
    }

    getFileName(path) {

    }

    isImage(filename) {
        const imagesExt = this.getMime().extensions.image
        const ext = this.getFileExtension(filename)
        return imagesExt.indexOf(ext) !== -1
    }
    isVideo(filename) {
        const imagesExt = this.getMime().extensions.video
        const ext = this.getFileExtension(filename)
        return imagesExt.indexOf(ext) !== -1
    }

    getFileType(path) {
        let fileType = ''
        const mimeGroups = this.getMime().extensions
        const ext = this.getFileExtension(path)
        const mimeGroupKeys = Object.keys(mimeGroups)
        mimeGroupKeys.forEach((mimeGroupKey) => {
            if(mimeGroups[mimeGroupKey].indexOf(ext) !== -1) {
                fileType = mimeGroupKey
            }
        })
        return fileType
   }
}

module.exports =  new HelperService();
