import styles from './LogoutBtn.module.css'
import { LogOut } from 'lucide-react'

import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';

export default function LogoutBtn() {
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();
    return (
        <button
            className={styles["logout-btn"]}
            onClick={() => {
                dispatch({ type: "LOGOUT" });
                navigate("/");
            }}>
            <LogOut />
        </button>
    )
}
