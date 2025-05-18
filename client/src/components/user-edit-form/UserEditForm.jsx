import styles from "./UserEditForm.module.css"


export default function UserEditForm({ fullname, username, profilePicture, cancelEdit }) {
    return (
        <>
            <div className={styles["img-container"]}>
                <img
                    src={profilePicture}
                    alt={`${fullname}'s avatar`}
                    className={styles["avatar"]}
                />
            </div>
            <form
                onSubmit={() => { }}
                className={styles["edit-form"]}
            >
                <div className={styles["form-group"]}>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        className={styles["form-input"]}
                    />
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className={styles["form-input"]}
                    />
                </div>
                <div className={styles["actions"]}>
                    <button
                        type="button"
                        className={`${styles["button"]} ${styles["cancel-edit"]}`}
                        onClick={cancelEdit}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className={`${styles["button"]} ${styles["save-button"]}`}
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </>
    )
}