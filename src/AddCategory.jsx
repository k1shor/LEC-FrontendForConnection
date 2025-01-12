import React, { useState } from 'react'
import { addCategory } from './api/categoryAPI'
import { isAuthenticated } from './api/userAPI'

const AddCategory = () => {
    let [category_name, setCategory] = useState('')

    let {token} = isAuthenticated()

    // console.log(token)
    const handleSubmit = e => {
        e.preventDefault()
        addCategory(category_name, token)
        .then(data=>{
            if(data.error){
                alert(data.error)
            }
            else{
                alert('Category Added Successfully')
            }
        })
    }

    return (
        <div className='text-center'>
            <form className='w-50 p-5 mx-auto shadow-lg my-5'>

                <h1 className='mb-2'>Add Category</h1>
                <input type="text" className='form-control mb-2'
                    onChange={e => setCategory(e.target.value)} />
                <button className='btn btn-warning w-100'
                    onClick={handleSubmit}
                >Add Category</button>
            </form>
        </div>
    )
}

export default AddCategory