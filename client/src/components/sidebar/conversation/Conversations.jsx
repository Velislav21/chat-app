import styles from './Conversations.module.css'
import Conversation from './Conversation'
import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'

import useConversationContext from '../../../hooks/useConversationContext'

export default function Conversations() {

    const {
        conversations,
        isLoading,
    } = useConversationContext();

    return (
        <>
            <div className={styles["conversation-container"]}>
                {
                    isLoading ?
                        <>
                            <SkeletonLoader />
                            <SkeletonLoader />
                            <SkeletonLoader />
                        </>
                        :
                        conversations.map((conversation) => (
                            <Conversation
                                key={conversation._id}
                                conversation={conversation}
                            />
                        ))}
            </div>
        </>
    )
}
