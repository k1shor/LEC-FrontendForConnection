import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const FetchData = () => {
    let [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`
            // ,{
            //     method:"GET",
            //     headers:{
            //         accept: "application/json",
            //         "Content-Type":"application/json"
            //     },
            //     body: JSON.stringify(data)
            // }
        )
            .then((response) => { return response.json() })
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            {
                posts.map((post) => {
                    return <div style={{
                        border: '3px solid gray',
                        padding: '20px',
                        fontSize: '20px'
                    }}>
                        <Link to={`/data/${post.id}`}>
                            <li>{post.title}</li>
                        </Link>
                    </div>
                })
            }
        </div>
    )
}

export default FetchData