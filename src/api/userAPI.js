const API = `http://localhost:5000/api`

export const register = (username, email, password) => {
    let user = { username, email, password }
    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const login = (user) => {
    return fetch(`${API}/login`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const verifyEmail = token => {
    return fetch(`${API}/verifyEmail/${token}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const authenticate = data => {
    localStorage.setItem('jwt', JSON.stringify(data))
}