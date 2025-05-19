import useEditProfile from "../../hooks/useEditProfile";
import useForm from "../../hooks/useForm"
import userEditSchema from "../../schemas/userEditSchema";
import styles from "./UserEditForm.module.css"

export default function UserEditForm({ fullname, username, profilePicture, cancelEdit }) {

    const { mutate: editProfile, isPending } = useEditProfile();

    const { values, handleInputChange, handleSubmit } = useForm({ fullname, username }, editProfile, userEditSchema);

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
                onSubmit={handleSubmit}
                className={styles["edit-form"]}
            >
                <div className={styles["form-group"]}>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        className={styles["form-input"]}
                        value={values.fullname}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={styles["form-group"]}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className={styles["form-input"]}
                        value={values.username}
                        onChange={handleInputChange}

                    />
                </div>
                <div className={styles["actions"]}>
                    <button
                        type="button"
                        className={`${styles["button"]} ${styles["cancel-edit"]}`}
                        onClick={cancelEdit}
                        disabled={isPending}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className={`${styles["button"]} ${styles["save-button"]}`}
                        disabled={isPending}
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </>
    )
}