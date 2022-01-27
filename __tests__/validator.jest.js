const {decryptPassword,hashPassword} = require('../src/utils/validator');

test('test hash and decryptPassword', () => {
    let plainPassword = '123456';
    let hashedPassword = hashPassword(plainPassword);
    expect(decryptPassword(plainPassword, hashedPassword)).toBe(true);
});