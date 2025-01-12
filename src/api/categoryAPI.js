const API = `http://localhost:5000/api`

export const addCategory = (category_name, token) => {
    return fetch(`${API}/addcategory`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ category_name })
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const getAllCategory = () => {
    return fetch(`${API}/getallcategories`)
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const getCategoryDetails = (id) => {
    return fetch(`${API}/getcategorydetails/${id}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}
export const updateCategory = (id, category_name, token) => {
    return fetch(`${API}/updatecategory/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ category_name })
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const deleteCategory = (id, token) => {
    return fetch(`${API}/deleteCategory/${id}`, {
        method: "DELETE",
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}