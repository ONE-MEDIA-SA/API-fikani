const {defaultBucket} = require('../config/fb.config');
const { v4: uuidv4 } = require('uuid');
const removeFile = require('./fsUtil');

exports.uploadFile = async (path, filename) => {

    // Upload the File
    const storage = await defaultBucket.upload(path, {
        public: true,
        destination: `/uploads/fikani/${filename}`,
        metadata: {
            firebaseStorageDownloadTokens: uuidv4(),
        }
    });
    removeFile(path);
    return storage[0].metadata.mediaLink;
}

exports.uploadMultipleFiles = async (paths, filenames) => { 
    const promises = paths.map(async (path, index) => {
        return this.uploadFile(path, filenames[index]);
    });

    return Promise.all(promises);
}