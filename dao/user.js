const bcrypt = require('bcrypt');

const users = {
    'user1@productioncoder.com': {
        pwHash: bcrypt.hashSync('user1pw', 10),
        roles: ['ADMIN'],
        id: '41c514f4-7288-4199-80c0-e0be7e4353d7'
    },
    'user2@productioncoder.com': {
        pwHash: bcrypt.hashSync('user2pw', 10),
        roles: ['ACCOUNT_MANAGER'],
        id: 'fa54f8ac-6ed7-49d5-b242-64b793da816a'
    }
}

// this call would be async and would return a promise
// if we were to use a real database
async function findUserByEmail(email) {
    const user = users[email];
    return user ? user : Promise.reject('user not found');
}

module.exports = {findUserByEmail};