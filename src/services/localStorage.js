const setToken = (value) => {
    localStorage.setItem('token', value);
}

const getToken = () => {
    let token = localStorage.getItem('token');
    return token;
}

const removeToken = () => {
    localStorage.removeItem('token');
}

export { setToken, getToken, removeToken };