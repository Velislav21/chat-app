import { useState } from 'react'
import { Link } from 'react-router'
import styles from '../UserForm.module.css'

function Register() {
    return (
        <div className={styles["container"]}>
            <div className={styles["form-box"]}>
                <h1 className={styles["title"]}>Register</h1>
                <form className={styles["form"]}>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">Fullname</label>
                        <input
                            type="text"
                            name="fullname"
                            className={styles["form-input"]}
                            placeholder="Enter your fullname"
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">Username</label>
                        <input
                            type="text"
                            name="username"
                            className={styles["form-input"]}
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className={styles["form-input"]}
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Confirm password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className={styles["form-input"]}
                            placeholder="Confirm password"
                        />
                    </div>
                    <div className={styles["form-group-gender"]}>
                        <label htmlFor="password">Male</label>
                        <input
                            type="radio"
                            name="male"
                            className={styles["form-input"]}
                            placeholder="Confirm password"
                        />
                        <label htmlFor="password">Female</label>
                        <input
                            type="radio"
                            name="female"
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

export default Register
