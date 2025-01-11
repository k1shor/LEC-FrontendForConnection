import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')


    return (
        <div>
            <main class="form-signin w-50 m-auto p-5 shadow-lg my-5 rounded">
                <form>
                    <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                        <h1 class="h3 mb-3 fw-normal">Sign up now</h1>

                        <div class="form-floating">
                            <input type="type" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Username</label>
                        </div>
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                        </div>

                        <div class="form-check text-start my-3">
                            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                                <label class="form-check-label" for="flexCheckDefault">
                                    I agree to the terms and conditions.
                                </label>
                        </div>
                        <button class="btn btn-primary w-100 py-2" type="submit">Register</button>
                        <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>.
                        Already have an account <Link to={'/login'}>Sign in</Link>
                </form>
            </main>
        </div>
    )
}

export default Register