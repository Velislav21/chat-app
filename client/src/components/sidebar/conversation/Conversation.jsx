import styles from './Conversation.module.css'

export default function Conversation() {
  return (
    <div className={styles["conversation-item"]}>
      <div className={styles["avatar-wrapper"]}>
        <img
          src={"https://avatar.iran.liara.run/public/girl?username=vilio2"}
          alt="avatar"
        />
        <div className={styles["online-status"]}></div> 
        {/* //! Hide online status when needed*/}
      </div>
      <div className={styles["conversation-item-content"]}>
        Some name here
      </div>
    </div>
  )
}
