
export const users = JSON.parse(localStorage.getItem("userList")) || [];


export const authentication = (authData) => {
    return users.find((user) => {
        return user.login === authData.login && user.password === authData.password
    })
};



