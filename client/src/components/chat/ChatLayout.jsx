import Sidebar from '../sidebar/Sidebar'
import styles from './ChatLayout.module.css'
import MessagesContainer from './messages/messages-container/MessagesContainer'
import { ConversationContextProvider } from '../../contexts/ConversationContext'
export default function ChatLayout() {
	return (
		<ConversationContextProvider>
			<div className={styles["chat-container"]}>
				<Sidebar />
				<MessagesContainer />
			</div>
		</ConversationContextProvider>
	)
}
