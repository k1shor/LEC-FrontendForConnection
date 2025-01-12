import React, { useEffect, useState } from 'react'
import { deleteCategory, getAllCategory } from './api/categoryAPI'
import { Link } from 'react-router-dom'
import { isAuthenticated } from './api/userAPI'

const AllCategory = () => {
    let [categories, setcategories] = useState([])
    let [success, setSuccess] = useState(false)

    const {token} = isAuthenticated()

    useEffect(() => {
        getAllCategory()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setcategories(data)
                    setSuccess(false)
                }
            })
    }, [success])

    const handleDelete = id => e => {
        e.preventDefault()
        let result = confirm("Are  you sure you want to delete this category?")

        if (result) {
            deleteCategory(id, token)
            .then(data=>{
                if(data.error){
                    alert(data.error)
                }
                else{
                    alert("Category deleted Successfully")
                    setSuccess(true)
                }
            })
        }
    }


    return (
        <div className='p-5'>
            <h1>Categories</h1>
            {
                categories.length > 0 &&
                categories.map(category => {
                    return <li className='list-unstyled'>
                        <h1><Link to={`/admin/category/edit/${category._id}`}>
                            {category.category_name}
                        </Link>
                            <button className='btn btn-danger'
                                onClick={handleDelete(category._id)}
                            >X</button>
                        </h1>
                    </li>
                })
            }

        </div>
    )
}

export default AllCategory