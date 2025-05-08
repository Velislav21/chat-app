import Sidebar from '../sidebar/Sidebar'
import styles from './ChatLayout.module.css'
import MessagesContainer from './messages/messages-container/MessagesContainer'

export default function ChatLayout() {
	return (
		<div className={styles["chat-container"]}>
			<Sidebar />
			<MessagesContainer />
		</div>
	)
}
