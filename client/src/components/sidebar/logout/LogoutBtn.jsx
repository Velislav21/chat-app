import styles from './LogoutBtn.module.css'
import { LogOut } from 'lucide-react'

export default function LogoutBtn() {
  return (
    <button className={styles["logout-btn"]}>
      <LogOut />
    </button>
  )
}
