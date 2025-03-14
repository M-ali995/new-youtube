export const authentication = (authData) => {
    const users = JSON.parse(localStorage.getItem("userList")) || [];
    return users.find((user) => {
        return user.login === authData.login && user.password === authData.password
    })
};



