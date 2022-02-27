import { useEffect, useState } from 'react'

import styles from '@styles/components/Register.module.css'

import {
    useCreateUserMutation,
    useIsUsernameAvailableQuery,
} from '@lib/generated/graphql'

export default function Register() {
    const [state, setState] = useState({
        email: '',
        username: '',
        password: '',
        passwordVerify: '',

        message: '',
        loader: false,
        canSubmit: false,
    })

    let {
        loading: usernameLoading,
        error,
        data,
    } = useIsUsernameAvailableQuery({
        variables: {
            username: state.username,
        },
    })

    let [createUser, { loading: creatingUser }] = useCreateUserMutation()

    useEffect(() => {
        setState({ ...state, loader: usernameLoading || creatingUser })
    }, [usernameLoading, creatingUser])

    useEffect(() => {
        if (error) setState({ ...state, message: error.message })
    }, [error])

    useEffect(() => {
        if (!usernameLoading && !data?.isUsernameAvailable) {
            setState({ ...state, message: 'Username Already Taken' })
        } else if (state.message !== '') {
            setState({ ...state, message: '' })
        }
    }, [data])

    useEffect(() => {
        const { password, passwordVerify } = state

        const passwordsDoNotMatch =
            password !== passwordVerify &&
            password !== '' &&
            passwordVerify !== ''
        if (passwordsDoNotMatch) {
            setState({
                ...state,
                message: 'Passwords do not match',
                canSubmit: false,
            })
        } else if (state.message !== '' || !state.canSubmit) {
            setState({
                ...state,
                message: '',
                canSubmit: true,
            })
        }
    }, [state.password, state.passwordVerify])

    const handleChange = (event: { target: { name: any; value: any } }) => {
        const name = event.target.name
        const value = event.target.value
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = async (event: {
        preventDefault: () => void
        target: any
    }) => {
        event.preventDefault()
        const form = event.target

        form.reset()

        if (state.password !== state.passwordVerify) {
            setState({ ...state, message: 'Passwords do not match' })
            return
        }

        try {
            const res = await createUser({
                variables: {
                    email: state.email,
                    username: state.username,
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
            <h1 className={styles.h1}>Register User</h1>
            <input
                className={styles.input}
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                name="email"
                type="email"
                required
            />
            <input
                className={styles.input}
                placeholder="username"
                value={state.username}
                onChange={handleChange}
                name="username"
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
            <input
                className={styles.input}
                placeholder="verify password"
                value={state.passwordVerify}
                onChange={handleChange}
                name="passwordVerify"
                type="password"
                required
            />
            <div className={styles.submitFields}>
                <button type="submit" disabled={!state.canSubmit}>
                    Submit
                </button>
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
