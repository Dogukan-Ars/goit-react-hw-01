import FriendListItem from "../FriendListItem/FriendListItem";
import styles from './FriendList.module.css'

const FriendList = ({ friends }) => {
    return (
        <>
            <ul className={styles.list}>
                {/* li sayısı, dizideki nesne sayısına bağlıdır */}
                {friends.map((friend) => (

                    <li key={friend.id}>
                        <FriendListItem friend={friend} />
                    </li>
                ))}
            </ul>


        </>
    )
}

export default FriendList