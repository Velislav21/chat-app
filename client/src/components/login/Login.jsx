import { useState } from 'react'
import { Link } from 'react-router'
import styles from '../UserForm.module.css'

function Login() {
    return (
        <div className={styles["container"]}>
            <div className={styles["form-box"]}>
                <h1 className={styles["title"]}>Login</h1>
                <form className={styles["form"]}>
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
