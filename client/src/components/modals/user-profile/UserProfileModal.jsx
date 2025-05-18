import useAuthContext from "../../../hooks/useAuthContext";
import styles from "./UserProfileModal.module.css";

export default function UserProfileModal({ isOpen, onClose }) {
    const { user } = useAuthContext();
    return <dialog
        open={isOpen}
        className={styles["dialog"]}
    //    onClose={onClose}
    >
        <div className={styles["profile-header"]}>
            <img
                src={"https://api.dicebear.com/9.x/adventurer/svg?seed=vilio 21&size=64&backgroundType=gradientLinear&earringsProbability=25&backgroundColor=ffdfbf,ffd5dc"
                }
                alt={`${user.fullname}'s avatar`}
                className={styles["avatar"]}
            />
            <h2>{user.fullname}</h2>
        </div>

        <div className={styles["profile-details"]}>
            <p>
                <strong>Username:</strong> {user.username}
            </p>
        </div>

        <div className={styles["actions"]}>
            <button
                className={`${styles["button"]} ${styles["delete-button"]}`}
                onClick={() => console.log("Delete action triggered")}
            >
                Delete Account
            </button>
            <button
                className={`${styles["button"]} ${styles["edit-button"]}`}
                onClick={() => console.log("Edit action triggered")}
            >
                Edit Profile
            </button>
            <button
                className={`${styles["button"]} ${styles["close-button"]}`}
                onClick={onClose}
            >
                Close
            </button>
        </div>
    </dialog>
}