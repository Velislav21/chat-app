import { Link } from 'react-router'
import styles from '../UserForm.module.css'

import registerSchema from '../../schemas/registerSchema'
import useRegister from '../../hooks/useRegister'
import useForm from '../../hooks/useForm'
import Spinner from '../spinner/Spinner'

import {
    UserIcon,
    KeyIcon,
    CheckIcon,
    MailIcon,
} from 'lucide-react'

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
                <h1 className={styles["title"]}>Create your account</h1>
                <form
                    onSubmit={handleSubmit}
                    className={styles["form"]}>
                    <div className={styles["form-group"]}>
                        <label htmlFor="fullname">Full name</label>
                        <UserIcon size={16} className={styles['input-icon']} />
                        <input
                            type="text"
                            name="fullname"
                            value={values.fullname}
                            onChange={handleInputChange}
                            className={styles["form-input"]}
                            placeholder="Jane Doe"
                            required
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="username">Username</label>
                        <MailIcon size={16} className={styles['input-icon']} />
                        <input
                            type="text"
                            name="username"
                            value={values.username}
                            onChange={handleInputChange}
                            className={styles["form-input"]}
                            placeholder="janedoe"
                            required
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Password</label>
                        <KeyIcon size={16} className={styles['input-icon']} />
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                            className={styles["form-input"]}
                            placeholder="••••••••"
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <CheckIcon size={16} className={styles['input-icon']} />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={values.confirmPassword}
                            onChange={handleInputChange}
                            className={styles["form-input"]}
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div>
                        <div className={styles["gender-options"]}>
                            <label className={styles["gender-label"]}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={values.gender === "male"}
                                    onChange={handleInputChange}
                                    className={styles["gender-input"]} // We'll style this to be hidden
                                />
                                <span>Male</span>
                            </label>
                            <label className={styles["gender-label"]}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={values.gender === "female"}
                                    onChange={handleInputChange}
                                    className={styles["gender-input"]}
                                />
                                <span>Female</span>
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={styles["form-button"]}
                        disabled={isPending}
                    >
                        {isPending ? <Spinner /> : "Register"}
                    </button>
                    <p className={styles["link"]}>
                        Already have an account? <Link to="/">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
