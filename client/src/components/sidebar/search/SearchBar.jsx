import { useState } from "react"

import { Search } from "lucide-react"

import styles from './SearchBar.module.css'
import useConversationContext from "../../../hooks/useConversationContext"
import useGetConversations from "../../../hooks/useGetConversations"

export default function SearchBar() {

    const [searchParam, setSearchParam] = useState('');
    const { setCurrentConversation } = useConversationContext();
    const { data: conversations } = useGetConversations();

    function handleSearch(e) {
        setSearchParam(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!searchParam) return;

        const conversation = conversations.find(conversation => conversation.fullname.toLowerCase().includes(searchParam.toLowerCase()));
        setCurrentConversation(conversation);
    }

    return (
        <form
            className={styles["search-form"]}
            onSubmit={handleSubmit}>
            <input
                className={styles["search-input"]}
                type="text"
                placeholder='Search...'
                onChange={handleSearch}
                value={searchParam}
            />
            <button className={styles["search-button"]}>
                <Search />
            </button>
        </form>
    )
}
