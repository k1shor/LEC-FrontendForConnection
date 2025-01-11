import React, { useState } from 'react'
import { authenticate, login } from './api/userAPI'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        login({ email, password })
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    alert('login successful')
                    authenticate(data)
                    if (data.user.role == 1) {
                        navigate('/admin/dashboard')
                    } else {

                        navigate('/')
                    }

                }
            })
    }

    return (
        <div>
            <main class="form-signin w-50 m-auto p-5 shadow-lg my-5 rounded">
                <form>
                    <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="form-check text-start my-3">
                        <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    </div>
                    <button class="btn btn-primary w-100 py-2" type="submit" onClick={handleSubmit}>Sign in</button>
                    <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
                </form>
            </main>
        </div>
    )
}

export default Login