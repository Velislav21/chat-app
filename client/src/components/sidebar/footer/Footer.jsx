import { useRef } from "react";

import styles from "./Footer.module.css"

import LogoutBtn from "../../logout/LogoutBtn";
import useAuthContext from "../../../hooks/useAuthContext";

import UserProfileModal from "../../modals/user-profile/UserProfileModal";

export default function Footer() {

    const { user } = useAuthContext();
    const dialogRef = useRef(null);

    function openUserProfileModal() {
        dialogRef.current.showModal();
    }

    return (
        <>
            <UserProfileModal ref={dialogRef} />
            <footer>
                <img
                    src={user.profilePicture}
                    alt=""
                    className={styles["avatar"]}
                    onClick={() => openUserProfileModal()}
                />
                <LogoutBtn />
            </footer>
        </>
    )
}