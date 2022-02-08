const {uploadFile, uploadMultipleFiles} = require('../src/utils/upload');

test('should return string url', async () => {
    const url = await uploadFile(__dirname+'/users.test.js', "users.test.js");
    expect(url).toContain('storage.googleapis.com')
});

let paths = [__dirname+'/users.test.js', __dirname+'/upload.test.js'];
let filenames = ['users.test.js', 'upload.test.js'];

test('should return array of urls', async () => { 
    const urls = await uploadMultipleFiles(paths, filenames);
    expect(urls.length).toBe(paths.length);
    expect(urls[0]).toContain('storage.googleapis.com');
});