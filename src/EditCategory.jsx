import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCategoryDetails, updateCategory } from './api/categoryAPI'
import { isAuthenticated } from './api/userAPI'

const EditCategory = () => {
    let [category_name, setCategory] = useState('')
    let { id } = useParams()

    const {token} = isAuthenticated()

    useEffect(() => {
        getCategoryDetails(id)
            .then(data => {
                if (data.error) {
                    console.log((data.error))
                }
                else {
                    setCategory(data.category_name)
                }
            })
    }, [])

    const handleSubmit = e=> {
        e.preventDefault()
        updateCategory(id, category_name, token)
        .then(data=>{
            if(data.error){
                alert(data.error)
            }
            else{
                // setCategory(data.category_name)
                alert("Category updated successfully")
            }
        })
    }

    return (
        <div className='text-center'>
            <form className='w-50 p-5 mx-auto shadow-lg my-5'>

                <h1 className='mb-2'>Edit Category</h1>
                <input type="text" className='form-control mb-2'
                    onChange={e => setCategory(e.target.value)} value={category_name} />
                <button className='btn btn-warning w-100'
                    onClick={handleSubmit}
                >Edit Category</button>
            </form>
        </div>
    )
}

export default EditCategory