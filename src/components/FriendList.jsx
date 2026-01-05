import FriendListItem from "./FriendListItem"

const FriendList = ({ friends }) => {
    return (
        <>
            <ul className="friend-list">
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