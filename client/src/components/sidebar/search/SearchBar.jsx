import { Search } from "lucide-react"
import styles from './SearchBar.module.css'

export default function SearchBar() {
    return (
        <form className={styles["search-form"]}>
            <input className={styles["search-input"]} type="text" placeholder='Search...' />
            <button className={styles["search-button"]}>
                <Search />
            </button>
        </form>
    )
}
