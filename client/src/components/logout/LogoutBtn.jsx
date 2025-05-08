import styles from './LogoutBtn.module.css'
import { LogOut } from 'lucide-react'

import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext';
import useConversationContext from '../../hooks/useConversationContext';
export default function LogoutBtn() {
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();
    const { setCurrentConversation } = useConversationContext();
    return (
        <button
            title="Logout"
            className={styles["logout-btn"]}
            onClick={() => {
                dispatch({ type: "LOGOUT" });
                navigate("/");
                setCurrentConversation(null);
            }}>
            <LogOut />
        </button>
    )
}
