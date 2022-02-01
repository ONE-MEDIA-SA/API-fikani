const database = require('../src/config/db.config');//TODO: MOCK THE DATABASE

const User = require('../src/models/userModel');

database.prototype.create = function(user) { 
    return user;
}

const user = {
    name: 'agostinho',
    email: 'Agostinho',
    password: '123456'
}


test('should ', async () => {
    const user = await User(database).create(user);
    expect(user.name).toBe('agostinho');
});

