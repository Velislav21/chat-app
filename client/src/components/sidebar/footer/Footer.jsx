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
                <section>
                    <p
                        className={styles["user-info"]}
                    >
                        Logged in as:
                    </p>
                    <p>
                        <strong
                            onClick={() => openUserProfileModal()}
                        >
                            {user.fullname}
                        </strong>
                    </p>
                </section>
                <LogoutBtn />
            </footer>
        </>
    )
}