export const users = [
    {
        login: "Ali",
        password: "12345"
    }
]


export const authentication = (authData) => {
    return users.find((user) => {
        return user.login === authData.login && user.password === authData.password
    })
};