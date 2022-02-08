const {uploadFile} = require('../src/utils/upload');

test('should return string url', async () => {
    const url = await uploadFile(__dirname+'/users.test.js', "users.test.js");
    expect(url).toContain('storage.googleapis.com')
});