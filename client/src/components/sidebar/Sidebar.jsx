import SearchBar from './search/SearchBar'
import Conversations from './conversation/Conversations'
import LogoutBtn from "../logout/LogoutBtn"
import styles from './Sidebar.module.css'
export default function Sidebar() {
  return (
    <div className={styles["sidebar-container"]}>
        <SearchBar />
        <Conversations />
        <LogoutBtn />
    </div>
  )
}
