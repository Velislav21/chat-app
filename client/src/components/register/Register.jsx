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
                            id="fullname"
                            className={styles["form-input"]}
                            placeholder="Enter your fullname"
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="email">Username</label>
                        <input
                            type="text"
                            id="username"
                            className={styles["form-input"]}
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className={styles["form-input"]}
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="password">Confirm password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className={styles["form-input"]}
                            placeholder="Confirm password"
                        />
                    </div>
                    <button type="submit" className={styles["form-button"]}>Register</button>
                    <p className={styles["link"]}>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register
