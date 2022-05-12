const axios = require('axios');

export async function createLoginUser(email, usrPswdInpt) {
    const response = await axios.post(`/api/registerUser`, { email, usrPswdInpt: usrPswdInpt });
    if (response.data.error) {
        alert(response.data.msg);
    }
    return response.data;
}


export async function isLoggedIn() {
    const response = await (axios.get("/api/isLoggedin"))
    return response.data.loggedin
}

export async function getList() {
    const response = await (axios.get("/api/usl/list"))
    return response.data;
}