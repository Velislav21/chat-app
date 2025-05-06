import styles from './Messages.module.css'
import Message from './message/Message'
import MessageInput from './message-input/MessageInput'
import NoSelectedChat from '../select-chat/NoSelectedChat'
export default function Messages() {
  return (
    <>
      <NoSelectedChat />
      {/* <div className={styles["chat-container"]}>
        <h1> <span>To:</span> Someone</h1>
        <div className={styles["messages-container"]}>
          <Message />
        </div>
        <MessageInput />
      </div> */}
    </>
  )
}