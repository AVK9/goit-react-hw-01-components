import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem'

export const FriendList = ({friends}) => (
    <ul className={css.friendList}>
        {friends.map(({avatar, name, isOnline, id }) => (
            <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                id={id}
            />

        ))}
    </ul>
)

