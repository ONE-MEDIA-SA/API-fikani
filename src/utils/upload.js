const {defaultBucket} = require('../config/fb.config');
const { v4: uuidv4 } = require('uuid');

exports.uploadFile = async (path, filename) => {

    // Upload the File
    const storage = await defaultBucket.upload(path, {
        public: true,
        destination: `/uploads/fikani/${filename}`,
        metadata: {
            firebaseStorageDownloadTokens: uuidv4(),
        }
    });

    return storage[0].metadata.mediaLink;
}