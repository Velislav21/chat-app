import SearchBar from './search/SearchBar'
import Conversations from './conversation/Conversations'
import Footer from './footer/Footer'
import styles from './Sidebar.module.css'
export default function Sidebar() {
  return (
    <div className={styles["sidebar-container"]}>
        <SearchBar />
        <Conversations />
        <Footer />
    </div>
  )
}
