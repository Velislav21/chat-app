import { Link } from 'react-router'
import styles from '../UserForm.module.css'
import useLogin from '../../hooks/useLogin'
import useForm from '../../hooks/useForm'
import loginSchema from '../../schemas/loginSchema'
import Spinner from '../spinner/Spinner'

import {
    UserIcon,
    KeyIcon,
} from 'lucide-react'

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
                        <UserIcon size={16} className={styles['input-icon']} />
                        <input
                            type="text"
                            name="username"
                            className={styles["form-input"]}
                            placeholder="johndoe"
                            value={values.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Password</label>
                        <KeyIcon size={16} className={styles['input-icon']} />
                        <input
                            type="password"
                            name="password"
                            className={styles["form-input"]}
                            placeholder="••••••••"
                            value={values.password}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button
                        disabled={isPending}
                        type="submit"
                        className={styles["form-button"]}
                    >
                        {isPending ? <Spinner /> : "Login"}
                    </button>

                    <p className={styles["link"]}>
                        Don't have an account? <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
