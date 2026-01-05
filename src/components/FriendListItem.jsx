
const FriendListItem = ({ friend }) => {
    const { avatar, name, isOnline } = friend;
    return (
        <div className="friend-list-item">
            <img src={avatar} alt={name}
                className="friend-avatar"
                width="48" />
            <p className="friend-name">{name}</p>
            <p className="friend-status">{isOnline ? "Online" : "Offline"}</p>
        </div>

    )
}

export default FriendListItem