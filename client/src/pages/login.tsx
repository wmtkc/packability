import Header from '@components/header'
import sharedStyles from '@styles/shared.module.css'
import LoginForm from '@components/forms/Login'
import RegisterForm from '@components/forms/Register'

export default function Login() {
    return (
        <>
            <Header titlePre="Login" />
            <div className={sharedStyles.layout}>
                <RegisterForm />
                <LoginForm />
            </div>
        </>
    )
}
