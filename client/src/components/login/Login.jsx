import { Link } from 'react-router'
import styles from '../UserForm.module.css'
import useLogin from '../hooks/useLogin'
import useForm from '../hooks/useForm'
import loginSchema from '../schemas/loginSchema'

const initialFormState = {
    username: '',
    password: '',
}

function Login() {
    const { mutate: register, isPending } = useLogin();

    const {
        values,
        handleInputChange,
        handleSubmit
    } = useForm(initialFormState, register, loginSchema)

    return (
        <div className={styles["container"]}>
            <div className={styles["form-box"]}>
                <h1 className={styles["title"]}>Login</h1>
                <form
                    onSubmit={handleSubmit}
                    className={styles["form"]}>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">Username</label>
                        <input
                            type="text"
                            name="username"
                            className={styles["form-input"]}
                            placeholder="Enter your username"
                            value={values.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className={styles["form-input"]}
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className={styles["form-button"]}>Login</button>
                    <p className={styles["link"]}>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
