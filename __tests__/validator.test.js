const { DESCRIBE } = require('sequelize/dist/lib/query-types');
const {decryptPassword,hashPassword} = require('../src/utils/validator');

test('test hash and decryptPassword', () => {
    let plainPassword = '123456';
    let hashedPassword = hashPassword(plainPassword);
    expect(decryptPassword(plainPassword, hashedPassword)).toBe(true);
});

test('should be false', () => {
    let plainPassword = '123456';
    let hashedPassword = hashPassword(plainPassword);
    expect(decryptPassword('1234567', hashedPassword)).toBe(false);
 }); 