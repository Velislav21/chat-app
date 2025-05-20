import { useState } from 'react';
import { createPortal } from 'react-dom'
import styles from "./UserProfileModal.module.css";

import UserEditForm from '../../user-edit-form/UserEditForm';

import useAuthContext from "../../../hooks/useAuthContext";
import useListenForDeletedUser from '../../../hooks/useListenForDeletedUser';
import useDeleteProfile from '../../../hooks/useDeleteProfile';

export default function UserProfileModal({ ref }) {
    const modalRoot = document.getElementById("user-profile-modal")
    
    const { user } = useAuthContext();

    const [isEditing, setIsEditing] = useState(false);

    const { isPending, mutate: deleteProfile } = useDeleteProfile();
    
    useListenForDeletedUser();

    function toggleEditForm() {
        setIsEditing((previousState) => !previousState);
    }

    return createPortal(<dialog
        ref={ref}
        className={styles["dialog"]}
    >
        {isEditing ?
            <UserEditForm
                {...user}
                cancelEdit={toggleEditForm}
            />
            :
            <>
                <div className={styles["profile-header"]}>
                    <img
                        src={user.profilePicture}
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
                    <form method="dialog">
                        <button
                            className={`${styles["button"]} ${styles["close-button"]}`}
                            disabled={isPending}
                        >
                            Close
                        </button>

                    </form>
                    <button
                        className={`${styles["button"]} ${styles["edit-button"]}`}
                        onClick={toggleEditForm}
                        disabled={isPending}

                    >
                        Edit Profile
                    </button>
                    <button
                        className={`${styles["button"]} ${styles["delete-button"]}`}
                        onClick={deleteProfile}
                        disabled={isPending}
                    >
                        Delete Profile
                    </button>
                </div>
            </>}
    </dialog>, modalRoot)
}