import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { verifyEmail } from './api/userAPI'

const VerifyEmail = () => {

    let params = useParams()
    let token = params.token

    let [error, setError] = useState('')
    let [success, setSuccess] = useState('')


    useEffect(() => {
        verifyEmail(token)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                    setSuccess(false)
                }
                else {
                    setError('')
                    setSuccess(data.message)
                }
            })
    }, [])

    const showError = () => {
        if (error) {
            return <div className='bg-danger'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='bg-success'>{success}</div>
        }
    }

    return (
        <div>
            {showError()}
            {showSuccess()}
        </div>
    )
}

export default VerifyEmail