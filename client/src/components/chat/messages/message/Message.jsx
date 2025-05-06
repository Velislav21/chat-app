import styles from './Message.module.css'

export default function Message() {
    return (
        <>
            <div className={`${styles["messageRow"]} ${styles["receiverRow"]}`}>
                <img
                    className={styles["avatar"]}
                    alt="Obi-Wan"
                    src="https://avatar.iran.liara.run/public/girl?username=vilio2"
                />
                <div>
                    <div className={styles["header"]}>
                        Obi-Wan Kenobi <span className={styles["time"]}>12:45</span>
                    </div>
                    <div className={`${styles["message"]} ${styles["receiver"]}`}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                </div>
            </div>

            <div className={`${styles["messageRow"]} ${styles["senderRow"]}`}>
                <img
                    className={styles["avatar"]}
                    alt="Anakin"
                    src="https://avatar.iran.liara.run/public/girl?username=vilio2"
                />
                <div>
                    <div className={styles["header"]}>
                        Anakin <span className={styles["time"]}>12:46</span>
                    </div>
                    <div className={`${styles["message"]} ${styles["sender"]}`}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                </div>
            </div>
        </>
    )
}
