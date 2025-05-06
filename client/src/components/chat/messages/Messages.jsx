import styles from './Messages.module.css'
import Message from './message/Message'
import MessageInput from './message-input/MessageInput'
export default function Messages() {
  return (
    <>
      <div className={styles["chat-container"]}>
        <h1> <span>To:</span> Someone</h1>
        <div className={styles["messages-container"]}>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        <MessageInput />
      </div>
    </>
  )
}
