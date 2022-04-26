const axios = require('axios');

export async function getAllUsers() {

    const response = await axios.get('/api/users');
    return response.data;
}

export async function createUser(email,usrPswdInpt) {
    const response = await axios.post(`/api/registerUser`, { email,usrPswdInpt });
    return response.data;
}
