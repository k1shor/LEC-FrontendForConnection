import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Data = () => {
    let params = useParams()
    const id = params.id

    let [post, setPost] = useState({})

    useEffect(() => {
        // let options ={
        //     method:"GET",
        //     headers:{
        //         Accept: "application/json",
        //         "Content-Type" : "application/json"
        //     }
        // }
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div style={{
            textAlign: 'center',
            fontSize: '20px',
            padding: '20px',
            width: '50%',
            margin: '20px auto',
            border:'3px solid gray',
            boxShadow: '0 0 5px 5px gray'
        }}>
            <h1>{post.id}. {post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default Data