import styles from './Conversations.module.css'
import Conversation from './Conversation'
import useGetConversations from '../../../hooks/useGetConversations'
import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'
export default function Conversations() {
  const { data: conversations, isLoading } = useGetConversations();
  console.log(conversations)
  return (
    <>
      <div className={styles["conversation-container"]}>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <SkeletonLoader />
      </div>
    </>
  )
}
