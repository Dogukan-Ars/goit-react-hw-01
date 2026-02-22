import styles from './FriendListItem.module.css'

const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;

    return (
        <div className={styles.friendListItem}>
            <img src={avatar} alt={name}
                className={styles.friendAvatar}
                width="48" />
            <p className={styles.friendName}>{name}</p>
            <p className={`${styles.friendStatus} ${isOnline ? styles.online : styles.offline}`}>{isOnline ? "Online" : "Offline"}</p>
        </div>

    )
}

export default FriendListItem