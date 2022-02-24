import { useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'

import styles from '@styles/components/Register.module.css'

import { LOGIN_MUTATION } from '@lib/mutations/login'

export default function Login() {
    const [state, setState] = useState({
        usernameOrEmail: '',
        password: '',

        message: '',
        loader: false,
    })

    let [login, { loading: loggingIn, error: loginError }] =
        useMutation(LOGIN_MUTATION)

    useEffect(() => {
        if (loginError) setState({ ...state, message: loginError.message })
    }, [loginError])

    useEffect(() => {
        setState({ ...state, loader: loggingIn })
    }, [loggingIn])

    const handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = async event => {
        event.preventDefault()
        const form = event.target

        form.reset()

        try {
            const res = await login({
                variables: {
                    usernameOrEmail: state.usernameOrEmail,
                    password: state.password,
                },
            })
            console.log(res)
        } catch (err) {
            setState({ ...state, message: err.message })
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.h1}>Login</h1>
            <input
                className={styles.input}
                placeholder="username or email"
                value={state.usernameOrEmail}
                onChange={handleChange}
                name="usernameOrEmail"
                type="text"
                required
            />
            <input
                className={styles.input}
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                name="password"
                type="password"
                required
            />
            <div className={styles.submitFields}>
                <button type="submit">Submit</button>
                <div
                    className={styles.message}
                    style={
                        state.message
                            ? { visibility: 'visible' }
                            : { visibility: 'hidden' }
                    }>
                    {state.message}
                </div>
                <div
                    className={styles.loader}
                    style={
                        state.loader
                            ? { visibility: 'visible' }
                            : { visibility: 'hidden' }
                    }></div>
            </div>
        </form>
    )
}
