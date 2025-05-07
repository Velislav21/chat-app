import { useEffect } from 'react'

import { Link } from 'react-router'
import styles from '../UserForm.module.css'

import registerSchema from '../schemas/registerSchema'
import useRegister from '../hooks/useRegister'
import useForm from '../hooks/useForm'
import { toast } from 'react-hot-toast'
const initialFormState = {
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
}

export default function Register() {
    const { mutate: register, isPending } = useRegister();

    const {
        values,
        handleInputChange,
        handleSubmit
    } = useForm(initialFormState, register, registerSchema)

    return (
        <div className={styles["container"]}>
            <div className={styles["form-box"]}>
                <h1 className={styles["title"]}>Register</h1>
                <form
                    onSubmit={handleSubmit}
                    className={styles["form"]}>
                    <div className={styles["form-group"]}>
                        <label htmlFor="fullname">Fullname</label>
                        <input
                            type="text"
                            name="fullname"
                            value={values.fullname}
                            onChange={handleInputChange}
                            className={styles["form-input"]}
                            placeholder="Enter your fullname"
                            required
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={values.username}
                            onChange={handleInputChange}
                            className={styles["form-input"]}
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                            className={styles["form-input"]}
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleInputChange}
                            className={styles["form-input"]}
                            placeholder="Confirm password"
                            required
                            />
                    </div>
                    <div className={styles["form-group-gender"]}>
                        <label htmlFor="gender">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={values.gender === 'male'}
                            onChange={handleInputChange}
                            className={styles["form-input"]}
                            placeholder="Confirm password"
                        />
                        <label htmlFor="gender">Female</label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"  
                            checked={values.gender === 'female'}
                            onChange={handleInputChange}
                            className={styles["form-input"]}
                            placeholder="Confirm password"
                        />
                    </div>
                    <button type="submit" className={styles["form-button"]}>Register</button>
                    <p className={styles["link"]}>
                        Already have an account? <Link to="/">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
